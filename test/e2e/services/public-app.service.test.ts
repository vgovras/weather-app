/* eslint-disable no-await-in-loop */
import moment from 'moment';
import { randomInt } from 'crypto';
import { HttpStatusCode } from '../../../src/core/errors/user.error';
import { configureModels, Models } from '../../../src/data/models';
import { DataSource } from '../../../src/data/data-source';
import { db } from '../../../src/lib/db';
import { truncateAll } from '../common';
import { createCityFixture } from '../fixtures/entities.fixtures';
import { openWeather } from '../mocks/open-weather';

import { CityService } from '../../../src/services/city.service';
import { CountryService } from '../../../src/services/country.service';
import { WeatherService } from '../../../src/services/weather.service';
import { PublicAppService } from '../../../src/services/public-app.service';

describe('public-app.service.test', () => {
    let cityService: CityService;
    let countryService: CountryService;
    let weatherService: WeatherService;
    let publicAppService: PublicAppService;
    let models: Models;

    beforeEach(async () => {
        await truncateAll(db);
        models = configureModels(db);
        const dataSource = new DataSource(models, openWeather);
        cityService = new CityService(models.city);
        countryService = new CountryService(models.country);
        countryService = new CountryService(models.country);
        weatherService = new WeatherService(models.weather, dataSource);
        publicAppService = new PublicAppService(dataSource);
    });

    afterAll(async () => {
        await db.destroy();
    });

    describe('getMostPopularCity', () => {
        it('should return the most popular city', async () => {
            expect.assertions(2);
            const ukr = await countryService.create({ code: 'UKR' });
            const kyiv = await cityService.create(createCityFixture(ukr.id));
            await weatherService.sync({ cityId: kyiv.id });

            const hun = await countryService.create({ code: 'HUN' });
            const budapest = await cityService.create(createCityFixture(hun.id));

            await weatherService.sync({ cityId: kyiv.id });
            await weatherService.sync({ cityId: budapest.id });

            for (let i = 0; i < 90; i += 1) {
                await publicAppService.getCityWeather({
                    cityId: kyiv.id,
                    from: new Date(1666386000 * 1000),
                    to: new Date(1666386000 * 1000),
                });
            }

            for (let i = 0; i < 10; i += 1) {
                await publicAppService.getCityWeather({
                    cityId: hun.id,
                    from: new Date(1666386000 * 1000),
                    to: new Date(1666386000 * 1000),
                });
            }

            const theMostPopularCity = await publicAppService.getMostPopularCity({
                from: moment().startOf('day').toDate(),
                to: new Date(),
            });

            expect(theMostPopularCity?.id).toEqual(kyiv.id);
            expect(theMostPopularCity?.count).toEqual(90);
        });

        it('should return null', async () => {
            expect.assertions(1);

            const theMostPopularCity = await publicAppService.getMostPopularCity({
                from: moment().startOf('day').toDate(),
                to: new Date(),
            });

            expect(theMostPopularCity).toEqual(null);
        });

        it('should throw limitDaysInDiapason', async () => {
            expect.assertions(1);

            try {
                await publicAppService.getMostPopularCity({
                    from: new Date(1666386000),
                    to: new Date(),
                });
            } catch (err: any) {
                expect(err).toEqual(expect.objectContaining({
                    statusCode: HttpStatusCode.BadRequest,
                    code: 'limit_days_in_diapason',
                }));
            }
        });
    });

    describe('getCityWeather', () => {
        it('should return city weather for period', async () => {
            expect.assertions(1);
            const country = await countryService.create({ code: 'UKR' });
            const city = await cityService.create(createCityFixture(country.id));
            await weatherService.sync({ cityId: city.id });

            const weathers = await publicAppService.getCityWeather({
                cityId: city.id,
                from: new Date(1666386000 * 1000),
                to: new Date(1666386000 * 1000),
            });

            expect(weathers).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    weatherTag: 'Clouds',
                    cityId: 1,
                    date: new Date('2022-10-21T21:00:00.000Z'),
                    temp: 277.99,
                    tempMin: 277.99,
                    tempMax: 278.57,
                }),
            ]));
        });

        it('should throw error cityIsNotExists', async () => {
            expect.assertions(1);

            try {
                await publicAppService.getCityWeather({
                    cityId: randomInt(100),
                    from: new Date(1666386000 * 1000),
                    to: new Date(1666386000 * 1000),
                });
            } catch (err: any) {
                expect(err).toEqual(expect.objectContaining({
                    statusCode: HttpStatusCode.NotFound,
                    code: 'city_is_not_exists',
                }));
            }
        });

        it('should throw error cityIsNotAvailable', async () => {
            expect.assertions(1);
            const country = await countryService.create({ code: 'UKR' });
            const city = await cityService.create(createCityFixture(country.id, false));

            try {
                await publicAppService.getCityWeather({
                    cityId: city.id,
                    from: new Date(1666386000 * 1000),
                    to: new Date(1666386000 * 1000),
                });
            } catch (err: any) {
                expect(err).toEqual(expect.objectContaining({
                    statusCode: HttpStatusCode.BadRequest,
                    code: 'city_is_not_available',
                }));
            }
        });

        it('should revert transaction if error', async () => {
            expect.assertions(2);
            const ukr = await countryService.create({ code: 'UKR' });
            const hun = await countryService.create({ code: 'HUN' });

            const kyiv = await cityService.create(createCityFixture(ukr.id));
            const budapest = await cityService.create(createCityFixture(hun.id));

            await weatherService.sync({ cityId: kyiv.id });
            await weatherService.sync({ cityId: budapest.id });

            for (let i = 0; i < 10; i += 1) {
                await publicAppService.getCityWeather({
                    cityId: budapest.id,
                    from: new Date(1666386000 * 1000),
                    to: new Date(1666386000 * 1000),
                });
            }

            for (let i = 0; i < 90; i += 1) {
                await publicAppService.getCityWeather({
                    cityId: kyiv.id,
                    from: new Date(1666386000),
                    to: new Date(1666386000 * 1000),
                }).catch(() => {});
            }

            const theMostPopularCity = await publicAppService.getMostPopularCity({
                from: moment().startOf('day').toDate(),
                to: new Date(),
            });

            expect(theMostPopularCity?.id).toEqual(budapest.id);
            expect(theMostPopularCity?.count).toEqual(10);
        });
    });

    describe('weatherService', () => {
        it('should throw error cityIsNotExists', async () => {
            expect.assertions(1);

            try {
                await weatherService.sync({ cityId: randomInt(100) });
            } catch (err: any) {
                expect(err).toEqual(expect.objectContaining({
                    statusCode: HttpStatusCode.NotFound,
                    code: 'city_is_not_exists',
                }));
            }
        });

        it('should throw error cityIsNotAvailable', async () => {
            expect.assertions(1);
            const country = await countryService.create({ code: 'UKR' });
            const city = await cityService.create(createCityFixture(country.id, false));

            try {
                await weatherService.sync({ cityId: city.id });
            } catch (err: any) {
                expect(err).toEqual(expect.objectContaining({
                    statusCode: HttpStatusCode.BadRequest,
                    code: 'city_is_not_available',
                }));
            }
        });
    });

    describe('getAverageCityTemperature', () => {
        it('should return average city temperature', async () => {
            expect.assertions(1);
            const country = await countryService.create({ code: 'UKR' });
            const city = await cityService.create(createCityFixture(country.id));
            await weatherService.sync({ cityId: city.id });

            const temperature = await publicAppService.getAverageCityTemperature({
                cityId: city.id,
                from: new Date(1666396800 * 1000),
                to: new Date(1666472400 * 1000),
            });

            expect(temperature).toEqual(281.28);
        });
    });

    it('should return 90 active cities', async () => {
        expect.assertions(1);
        const country = await countryService.create({ code: 'UKR' });

        for (let i = 0; i < 90; i += 1) {
            await cityService.create(createCityFixture(country.id));
        }

        for (let i = 0; i < 10; i += 1) {
            await cityService.create(createCityFixture(country.id, false));
        }

        const cities = await publicAppService.getAvailableCities({ limit: 100 });
        expect(cities.length).toBe(90);
    });
});

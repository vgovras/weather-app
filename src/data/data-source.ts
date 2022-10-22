import moment from 'moment';
import { CoreDataSource, GetByPeriodParams, GetHistoryByPeriodParams } from '../core/interfaces/data-source';
import { DbRecord, City, Weather, RecordId, SearchHistoryItem } from './interfaces/entities';
import { Models } from './models';
import { openWeather } from '../lib/open-weather';
import { QueryOptions } from './interfaces/query';

export class DataSource implements CoreDataSource {
    constructor(
        private readonly models: Models,
    ) { }

    async getHistoryByPeriod(options: GetHistoryByPeriodParams): Promise<DbRecord<SearchHistoryItem>[]> {
        return this.models.searchHistory.getByPeriod(options);
    }

    async incrementSearchHistory(cityId: number): Promise<number> {
        const day = moment().startOf('day').toDate();

        let searchHistory = await this.models.searchHistory.findOne({ cityId, day });

        if (!searchHistory) {
            searchHistory = await this.models.searchHistory.create({ day, cityId, count: 0 });
        }

        return this.models.searchHistory.increment({ id: searchHistory.id, count: 1 });
    }

    getActiveCities(options: QueryOptions<City>): Promise<DbRecord<City>[]> {
        return this.models.city.find({ isActive: true }, options);
    }

    getWeatherByPeriod(params: GetByPeriodParams): Promise<DbRecord<Weather>[]> {
        return this.models.weather.getByPeriod(params);
    }

    async saveWeather(weathers: Weather[]): Promise<DbRecord<Weather>[]> {
        return this.models.weather.createManyIfNotExists({ conflictColumns: ['date', 'cityId'], values: weathers });
    }

    async getCities(cityIds: RecordId[]): Promise<DbRecord<City>[]> {
        return this.models.city.find({ id: cityIds });
    }

    async getExternalWeather(city: Pick<DbRecord<City>, 'latitude' | 'longitude' | 'id'>): Promise<Weather[]> {
        const cityWeathers = await openWeather
            .weaklyWeather({ lat: city.latitude, lon: city.latitude })
            .then(response => response.data.list);

        return cityWeathers.map(cityWeather => ({
            cityId: city.id,
            date: new Date(cityWeather.dt * 1000),
            temp: cityWeather.main.temp,
            tempMin: cityWeather.main.temp_min,
            tempMax: cityWeather.main.temp_max,
            weatherTag: cityWeather.weather[0]?.main || 'Clouds',
        }));
    }
}

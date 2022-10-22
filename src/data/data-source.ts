import { CoreDataSource } from '../core/interfaces/data-source';
import { DbRecord, City, Weather, RecordId } from './interfaces/entities';
import { Models } from './models';
import { openWeather } from '../lib/open-weather';

export class DataSource implements CoreDataSource {
    constructor(
        private readonly models: Models,
    ) { }

    async saveWeather(weathers: Weather[]): Promise<DbRecord<Weather>[]> {
        return this.models.weather.createManyIfNotExists({ conflictColumns: ['date'], values: weathers });
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

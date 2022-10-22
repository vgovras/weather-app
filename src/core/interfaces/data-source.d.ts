import { City, Weather, DbRecord } from '../../data/interfaces/entities';

export type Diapason = { from: Date; to: Date };

export interface GetCitiesParams {
    /**
     * @default true
     */
    onlyActive?: boolean;
    /**
     * @default 0
     */
    skip?: number;

    /**
     * @default 5
     */
    limit?: number;
}

export interface GetWeatherParams {
    cityId: number;
    date: Diapason;
}

export interface GetExternalWeatherParams {
    lat: number;
    lon: number;
}

export interface CoreDataSource {
    getCities(cityIds: number[]): Promise<DbRecord<City>[]>;
    // getWeather(params?: GetWeatherParams): Promise<DbRecord<Weather[]>>;
    // getMostPopularCity(): Promise<City>;
    getExternalWeather(city: Pick<DbRecord<City>, 'latitude' | 'longitude' | 'id'>): Promise<Weather[]>;
    saveWeather(weathers: Weather[]): Promise<DbRecord<Weather>[]>;
}

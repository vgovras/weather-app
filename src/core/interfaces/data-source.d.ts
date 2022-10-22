import { City, Weather, DbRecord, SearchHistoryItem } from '../../data/interfaces/entities';
import { QueryOptions } from '../../data/interfaces/query';

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

export interface GetByPeriodParams {
    cityId: number;
    from: Date;
    to: Date;
}

export interface GetHistoryByPeriodParams {
    from: Date;
    to: Date;
}

export interface CoreDataSource {
    getCities(cityIds: number[]): Promise<DbRecord<City>[]>;
    getActiveCities(options: QueryOptions<City>): Promise<DbRecord<City>[]>;
    getExternalWeather(city: Pick<DbRecord<City>, 'latitude' | 'longitude' | 'id'>): Promise<Weather[]>;
    saveWeather(weathers: Weather[]): Promise<DbRecord<Weather>[]>;
    getWeatherByPeriod(params: GetByPeriodParams): Promise<DbRecord<Weather>[]>;
    incrementSearchHistory(cityId: number): Promise<number>;
    getHistoryByPeriod(options: GetHistoryByPeriodParams): Promise<DbRecord<SearchHistoryItem>[]>;
}

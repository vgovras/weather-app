import { RecordId, City } from '../../data/interfaces/entities';
import { QueryOptions } from '../../data/interfaces/query';

export interface GetCityWeatherCoreActionPayload {
    cityId: RecordId;
    from: Date;
    to: Date;
}

export interface GetAverageCityTemperatureActionPayload {
    cityId: RecordId;
    from: Date;
    to: Date;
}

export type GetAwaitableCitiesActionPayload = QueryOptions<City>;

export interface SyncWeatherActionPayload {
    cityId: number;
}

export interface GetMostPopularCityActionPayload {
    from: Date;
    to: Date;
}

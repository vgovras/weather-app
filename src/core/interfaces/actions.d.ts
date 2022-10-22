import { RecordId } from '../../data/interfaces/entities';

export interface GetWeatherCoreActionPayload {
    cityId: RecordId;
    date: Diapason;
}

export interface GetAverageTemperatureActionPayload {
    cityId: RecordId;
    date: Diapason;
}

export interface GetCitiesActionPayload {
    skip?: number;
    limit?: number;
}

export interface SyncWeatherActionPayload {
    cityId: number;
}

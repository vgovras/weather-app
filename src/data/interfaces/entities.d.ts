export type RecordId = number;

export interface DbRecord<T extends object = {}> extends T {
    id: RecordId;
    createdAt: Date;
    updatedAt: Date;
}

export interface Country {
    code: string;
}

export interface City {
    name: string;
    countryId: RecordId;
    latitude: number;
    longitude: number;
    isActive: boolean;
}

export interface Weather {
    weatherTag: string;
    cityId: RecordId ;
    date: Date;
    temp: number;
    tempMin: number;
    tempMax: number;
}

export interface SearchHistoryItem {
    cityId: number;
    day: Date;
    count: number;
}

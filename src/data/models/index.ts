import { Tables } from '../constants';

import { ModelFactory } from './model.factory';
import { BaseModel } from './_base.model';

import { dummyLogger } from '../../lib/dummy-logger';
import { Logger } from '../../core/interfaces/logger';

import { City, Country } from '../interfaces/entities';
import { Pool } from '../interfaces/pool';

import { WeatherModel } from './weather.model';
import { SearchHistoryModel } from './search-history.model';

export type CityModel = BaseModel<City>;
export type CountryModel = BaseModel<Country>;

export interface Models {
    city: CityModel;
    country: CountryModel;
    searchHistory: SearchHistoryModel;
    weather: WeatherModel;
}

export const configureModels = (db: Pool, logger: Logger = dummyLogger): Models => ({
    city: ModelFactory.createBase<City>(Tables.City).getInstance(db, logger),
    country: ModelFactory.createBase<Country>(Tables.Country).getInstance(db, logger),
    searchHistory: new SearchHistoryModel(db, logger),
    weather: new WeatherModel(db, logger),
});

export { WeatherModel } from './weather.model';
export { SearchHistoryModel } from './search-history.model';

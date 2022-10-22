import { DataSource } from '../data/data-source';
import { configureModels } from '../data/models';
import { CityService } from './city.service';
import { CountryService } from './country.service';
import { WeatherService } from './weather.service';
import { PublicAppService } from './public-app.service';

import { db } from '../lib/db';
import { logger } from '../lib/logger';

const models = configureModels(db, logger);
const dataSource = new DataSource(models);

const city = new CityService(models.city);
const country = new CountryService(models.country);
const weather = new WeatherService(models.weather, dataSource);

export const services = {
    city,
    country,
    weather,
    get publicApp() {
        return new PublicAppService(dataSource);
    },
};

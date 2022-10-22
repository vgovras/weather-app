import { Router } from 'express';

import { DataSource } from '../../data/data-source';
import { configureModels } from '../../data/models';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';
import { WeatherService } from '../../services/weather.service';

import { AdminCityController } from './city.controller.admin';
import { AdminCountryController } from './country.controller.admin';
import { AdminWeatherController } from './weather.controller.admin';

import { db } from '../../lib/db';
import { logger } from '../../lib/logger';

const router = Router();
const models = configureModels(db, logger);
const dataSource = new DataSource(models);

const cityService = new CityService(models.city);
const countryService = new CountryService(models.country);
const weatherService = new WeatherService(models.weather, dataSource);

const adminCityController = new AdminCityController(cityService);
const adminCountryController = new AdminCountryController(countryService);
const adminWeatherController = new AdminWeatherController(weatherService);

// router.get('/cities', adminCityController.getCities);
// router.get('/cities/:id/weather', adminCityController.createCity);
// router.get('/cities/:id/average-temperature', adminCityController.createCity);
// router.get('/cities/most-popular', adminCityController.createCity);

/**
 *  Admin country endpoints
 */
router.get(
    '/admin/country/list',
    adminCountryController.list.bind(adminCountryController),
);
router.post(
    '/admin/country/create',
    adminCountryController.create.bind(adminCountryController),
);

/**
 *  Admin city endpoints
 */
router.get(
    '/admin/city/list',
    adminCityController.getCities.bind(adminCityController),
);
router.post(
    '/admin/city/create',
    adminCityController.createCity.bind(adminCityController),
);

/**
 *  Admin weather endpoints
 */
router.post(
    '/admin/weather/sync',
    adminWeatherController.sync.bind(adminWeatherController),
);

export { router };

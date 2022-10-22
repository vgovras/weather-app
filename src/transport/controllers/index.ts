import { Router } from 'express';

import { AdminCityController } from './city.controller.admin';
import { AdminCountryController } from './country.controller.admin';
import { AdminWeatherController } from './weather.controller.admin';

import { services } from '../../services';

const router = Router();

const adminCityController = new AdminCityController(services.city);
const adminCountryController = new AdminCountryController(services.country);
const adminWeatherController = new AdminWeatherController(services.weather);

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

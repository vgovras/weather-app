import { Router } from 'express';

import { adminCityRouter } from './city.controller.admin';
import { adminCountryRouter } from './country.controller.admin';
import { adminWeatherRouter } from './weather.controller.admin';
import { publicAppRouter } from './app.controller.public';

const router = Router();

router.use('/admin/city', adminCityRouter);
router.use('/admin/weather', adminWeatherRouter);
router.use('/admin/country', adminCountryRouter);
router.use(publicAppRouter);

export { router };

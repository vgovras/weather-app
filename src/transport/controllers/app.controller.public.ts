import { Request, Response, Router } from 'express';
import {
    GetCityWeatherCoreActionPayload,
    GetAverageCityTemperatureActionPayload,
    GetMostPopularCityActionPayload,
    GetAvailableCitiesActionPayload,
} from '../../core/interfaces/actions';
import { logger } from '../../lib/logger';
import { services } from '../../services';
import { validator } from '../middlewares/validation.middleware';
import { listSchema } from '../common/schemas';

export const publicAppRouter = Router();

publicAppRouter.get(
    '/city/list',
    validator<GetAvailableCitiesActionPayload>(listSchema),
    async (req: Request, res: Response) => {
        logger.debug('get_available_cities_req => ', JSON.stringify(req.query));
        const result = await services.publicApp.getAvailableCities(req.query);

        logger.debug('get_available_cities_req => ', JSON.stringify(result));
        return res.json({ success: true, result });
    },
);

publicAppRouter.get(
    '/city/:id/weather',
    validator<GetCityWeatherCoreActionPayload>({
        cityId: { type: 'number', positive: true, integer: true },
        from: { type: 'date' },
        to: { type: 'date' },
    }),
    async (req: Request, res: Response) => {
        logger.debug('get_city_weather_req => ', JSON.stringify({ ...req.query, ...req.params }));
        const { from, to } = req.query as unknown as GetCityWeatherCoreActionPayload;
        const cityId = parseInt(req.params.id, 10);
        const result = await services.publicApp.getCityWeather({ cityId, from, to });

        logger.debug('get_city_weather_res => ', JSON.stringify(result));
        return res.json({ success: true, result });
    },
);

publicAppRouter.get(
    '/city/:id/temperature',
    validator<GetAverageCityTemperatureActionPayload>({
        cityId: { type: 'number', positive: true, integer: true },
        from: { type: 'date' },
        to: { type: 'date' },
    }),
    async (req: Request, res: Response) => {
        logger.debug('get_city_temperature_req => ', JSON.stringify(req.query));
        const { from, to } = req.query as unknown as GetAverageCityTemperatureActionPayload;
        const cityId = parseInt(req.params.id, 10);
        const result = await services.publicApp.getAverageCityTemperature({ cityId, from, to });

        logger.debug('get_city_temperature_res => ', JSON.stringify(result));
        return res.json({ success: true, result });
    },
);

publicAppRouter.get(
    '/city/popular',
    validator<GetMostPopularCityActionPayload>({
        from: { type: 'date' },
        to: { type: 'date' },
    }),
    async (req: Request, res: Response) => {
        logger.debug('get_most_popular_city_req => ', JSON.stringify(req.query));
        const { from, to } = req.query as unknown as GetMostPopularCityActionPayload;
        const result = await services.publicApp.getMostPopularCity({ from, to });

        logger.debug('get_most_popular_city_res => ', JSON.stringify(result));
        return res.json({ success: true, result });
    },
);

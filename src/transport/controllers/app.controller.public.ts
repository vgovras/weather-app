import { Request, Response } from 'express';
import {
    GetCityWeatherCoreActionPayload,
    GetAverageCityTemperatureActionPayload,
    GetMostPopularCityActionPayload,
} from '../../core/interfaces/actions';
import { logger } from '../../lib/logger';
import { PublicAppService } from '../../services/public-app.service';

export class PublicAppController {
    constructor(
        private readonly publicAppService: PublicAppService,
    ) { }

    async getAwaitableCities(req: Request, res: Response) {
        logger.trace('get_awaitable_cities_req => ', JSON.stringify(req.query));
        const result = await this.publicAppService.getAwaitableCities(req.query);

        logger.trace('get_awaitable_cities_req => ', JSON.stringify(result));
        return res.json({ success: true, result });
    }

    async getCityWeather(req: Request, res: Response) {
        logger.trace('get_city_weather_req => ', JSON.stringify(req.query));
        const { cityId, from, to } = req.query as unknown as GetCityWeatherCoreActionPayload;
        const result = await this.publicAppService.getCityWeather({ cityId, from, to });

        logger.trace('get_city_weather_res => ', JSON.stringify(result));
        return res.json({ success: true, result });
    }

    async getAverageCityTemperature(req: Request, res: Response) {
        logger.trace('get_city_weather_req => ', JSON.stringify(req.query));
        const { cityId, from, to } = req.query as unknown as GetAverageCityTemperatureActionPayload;
        const result = await this.publicAppService.getAverageCityTemperature({ cityId, from, to });

        logger.trace('get_city_weather_res => ', JSON.stringify(result));
        return res.json({ success: true, result });
    }

    async getMostPopularCity(req: Request, res: Response) {
        logger.trace('get_most_popular_city_req => ', JSON.stringify(req.query));
        const { from, to } = req.query as unknown as GetMostPopularCityActionPayload;
        const result = await this.publicAppService.getMostPopularCity({ from, to });

        logger.trace('get_most_popular_city_res => ', JSON.stringify(result));
        return res.json({ success: true, result });
    }
}

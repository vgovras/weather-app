import { Request, Response } from 'express';
import { logger } from '../../lib/logger';
import { WeatherService } from '../../services/weather.service';

export class AdminWeatherController {
    constructor(
        private readonly weatherService: WeatherService,
    ) { }

    async sync(req: Request, res: Response) {
        logger.debug('req_sync_weather =>', JSON.stringify(req.body));
        const result = await this.weatherService.syncWeather(req.body);

        logger.debug('res_sync_weather =>', result);
        return res.json({ success: true, result });
    }
}

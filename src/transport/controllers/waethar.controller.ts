import { Request, Response } from 'express';
import { CityService } from '../../services/city.service';

export class WeatherController {
    constructor(
        private readonly cityService: CityService,
    ) { }

    async getAvailableCities(req: Request, res: Response) {
        const result = await this.cityService.list(req.body);
        return res.json({ success: true, ...result });
    }

    async getWeatherInformation(req: Request, res: Response) {
        const result = await this.cityService.list(req.body);
        return res.json({ success: true, ...result });
    }
}

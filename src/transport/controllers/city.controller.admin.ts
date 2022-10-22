import { Request, Response } from 'express';
import { CityService } from '../../services/city.service';

export class AdminCityController {
    constructor(private readonly cityService: CityService) {}

    async createCity(req: Request, res: Response) {
        const result = await this.cityService.create(req.body);
        return res.json(result);
    }

    async getCities(req: Request, res: Response) {
        const result = await this.cityService.list(req.body);
        return res.json(result);
    }
}

import { Request, Response } from 'express';
import { logger } from '../../lib/logger';
import { CountryService } from '../../services/country.service';

export class AdminCountryController {
    constructor(private readonly countryService: CountryService) {}

    async list(req: Request, res: Response) {
        logger.debug('req_list_countries =>', JSON.stringify(req.body));
        const result = await this.countryService.list(req.query);

        logger.debug('res_list_countries =>', JSON.stringify(result));
        return res.json({ success: true, ...result });
    }

    async create(req: Request, res: Response) {
        logger.debug('req_list_countries =>', JSON.stringify(req.body));
        const result = await this.countryService.create(req.body);

        logger.debug('res_list_countries =>', JSON.stringify(result));
        return res.json({ success: true, ...result });
    }
}

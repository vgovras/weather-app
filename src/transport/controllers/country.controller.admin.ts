import { Request, Response, Router } from 'express';
import { logger } from '../../lib/logger';
import { services } from '../../services';

export const adminCountryRouter = Router();

adminCountryRouter.get('/list', async (req: Request, res: Response) => {
    logger.debug('req_list_countries =>', JSON.stringify(req.body));
    const result = await services.country.list(req.query);

    logger.debug('res_list_countries =>', JSON.stringify(result));
    return res.json({ success: true, ...result });
});

adminCountryRouter.post('/create', async (req: Request, res: Response) => {
    logger.debug('req_list_countries =>', JSON.stringify(req.body));
    const result = await services.country.create(req.body);

    logger.debug('res_list_countries =>', JSON.stringify(result));
    return res.json({ success: true, ...result });
});

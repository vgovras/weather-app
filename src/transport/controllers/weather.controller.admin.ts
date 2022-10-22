import { Request, Response, Router } from 'express';
import { logger } from '../../lib/logger';
import { services } from '../../services';

export const adminWeatherRouter = Router();

adminWeatherRouter.post('/sync', async (req: Request, res: Response) => {
    logger.debug('req_sync_weather =>', JSON.stringify(req.body));
    const result = await services.weather.sync(req.body);

    logger.debug('res_sync_weather =>', result);
    return res.json({ success: true, result });
});

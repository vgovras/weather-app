import { SyncWeatherActionPayload } from 'core/interfaces/actions';
import { Request, Response, Router } from 'express';
import { validator } from 'transport/middlewares/validation.middleware';
import { logger } from '../../lib/logger';
import { services } from '../../services';

export const adminWeatherRouter = Router();

adminWeatherRouter.post(
    '/sync',
    validator<SyncWeatherActionPayload>({
        cityId: { type: 'number', positive: true, integer: true },
    }),
    async (req: Request, res: Response) => {
        logger.debug('req_sync_weather =>', JSON.stringify(req.body));
        const result = await services.weather.sync(req.body);

        logger.debug('res_sync_weather =>', result);
        return res.json({ success: true, result });
    },
);

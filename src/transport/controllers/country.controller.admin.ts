import { Request, Response, Router } from 'express';
import { validator } from '../middlewares/validation.middleware';
import { listSchema } from '../common/schemas';
import { logger } from '../../lib/logger';
import { services } from '../../services';
import { Country } from '../../data/interfaces/entities';

export const adminCountryRouter = Router();

adminCountryRouter.get(
    '/list',
    validator(listSchema),
    async (req: Request, res: Response) => {
        logger.debug('req_list_countries =>', JSON.stringify(req.body));
        const result = await services.country.list(req.query);

        logger.debug('res_list_countries =>', JSON.stringify(result));
        return res.json({ success: true, result });
    },
);

adminCountryRouter.post(
    '/create',
    validator<Country>({
        code: { type: 'string', max: 8 },
    }),
    async (req: Request, res: Response) => {
        logger.debug('req_list_countries =>', JSON.stringify(req.body));
        const result = await services.country.create(req.body);

        logger.debug('res_list_countries =>', JSON.stringify(result));
        return res.json({ success: true, result });
    },
);

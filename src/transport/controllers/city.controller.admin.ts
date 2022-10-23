import { Request, Response, Router } from 'express';
import { services } from '../../services';
import { validator } from '../middlewares/validation.middleware';
import { listSchema } from '../common/schemas';
import { City } from '../../data/interfaces/entities';

export const adminCityRouter = Router();

adminCityRouter.post(
    '/create',
    validator<City>({
        countryId: { type: 'number', positive: true, integer: true },
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        name: { type: 'string', max: 64 },
    }),
    async (req: Request, res: Response) => {
        const result = await services.city.create(req.body);
        return res.json({ success: true, result });
    },
);

adminCityRouter.get(
    '/list',
    validator(listSchema),
    async (req: Request, res: Response) => {
        const result = await services.city.list(req.body);
        return res.json({ success: true, result });
    },
);

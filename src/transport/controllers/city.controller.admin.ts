import { Request, Response, Router } from 'express';
import { services } from '../../services';

export const adminCityRouter = Router();

adminCityRouter.post('/create', async (req: Request, res: Response) => {
    const result = await services.city.create(req.body);
    return res.json({ success: true, result });
});

adminCityRouter.get('/list', async (req: Request, res: Response) => {
    const result = await services.city.list(req.body);
    return res.json({ success: true, result });
});

import { Request, Response, NextFunction } from 'express';
import Validator, { ValidationSchema } from 'fastest-validator';
import { HttpStatusCode } from '../../core/errors/user.error';

const v = new Validator();

export const validator = <T>(schema: ValidationSchema<T> | ValidationSchema<T>[]) => (
    async (req: Request, res: Response, next: NextFunction) => {
        const data = { ...req.body, ...req.params, ...req.params };
        const validateData = v.compile(schema);
        const error = await validateData(data);

        if (Array.isArray(error)) {
            res.status(HttpStatusCode.UnprocessableEntity).json({ success: false, error });
            return;
        }

        next();
    }
);

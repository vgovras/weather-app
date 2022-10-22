import { Request, Response, NextFunction } from 'express';
import { asyncLocalStorage, createTraceId } from '../../lib/logger';

export const tracer = async (req: Request, res: Response, next: NextFunction) => {
    const requestId = typeof req.headers['x-request-id'] === 'string' ? req.headers['x-request-id'] : createTraceId();

    await asyncLocalStorage.run({ requestId }, async () => next());
};

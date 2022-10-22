/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { ErrorType, UserError } from '../../core/errors/user.error';
import { logger } from '../../lib/logger';

export const errorHandler = (err: Error | UserError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof UserError) {
        const { message, type, code } = err;

        return res
            .status(code)
            .json({ success: false, error: { message, type, code } });
    }

    logger.error('internal_error =>', err.message);

    return res
        .status(500)
        .json({ success: false, error: { message: 'internal error', type: ErrorType.Internal } });
};

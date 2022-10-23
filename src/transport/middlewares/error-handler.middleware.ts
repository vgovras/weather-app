/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { UserError } from '../../core/errors/user.error';
import { logger } from '../../lib/logger';

export const errorHandler = (err: Error | UserError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof UserError) {
        const { code, message, statusCode, name, cause, stack, ...additional } = err;

        return res
            .status(statusCode)
            .json({ success: false, error: { code, message, ...additional } });
    }

    logger.error('internal_error =>', err.message);

    return res
        .status(500)
        .json({ success: false, error: { code: 'internal_error', message: 'Server error.' } });
};

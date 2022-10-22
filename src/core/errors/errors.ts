import { ErrorType, UserError } from './user.error';

const create = (message: string, type: ErrorType = ErrorType.PreconditionFailed) => new UserError(type, message);

export const errors = {
    badRequest: create('bad_request', ErrorType.BadRequest),
};

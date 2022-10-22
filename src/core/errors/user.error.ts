export enum ErrorType {
    PreconditionFailed = 'precondition_failed',
    NotFound = 'not_found',
    Unauthorized = 'unauthorized',
    Internal = 'internal',
    BadRequest = 'bad_request',
}

export const errorCodes = {
    [ErrorType.PreconditionFailed]: 412,
    [ErrorType.NotFound]: 404,
    [ErrorType.Unauthorized]: 401,
    [ErrorType.Internal]: 500,
    [ErrorType.BadRequest]: 400,
};

export class UserError extends Error {
    code: number;
    static types = ErrorType;

    constructor(
        public readonly type: ErrorType,
        public readonly message: string,
    ) {
        super(message);
        this.code = errorCodes[type];
    }
}

import { UserError, HttpStatusCode } from './user.error';

export const errors = {
    limitDaysInDiapason: (limit: number) => new UserError({
        code: 'limit_days_in_diapason',
        message: `The limit of ${limit} days has been exceeded.`,
        statusCode: HttpStatusCode.BadRequest,
    }),
    cityIsNotAvailable: (cityId: number) => new UserError({
        code: 'city_is_not_available',
        message: `the city ${cityId} is temporarily unavailable.`,
        statusCode: HttpStatusCode.BadRequest,
    }),
    cityIsNotExists: (cityId: number) => new UserError({
        code: 'city_is_not_exists',
        message: `The city ${cityId} is not exists.`,
        statusCode: HttpStatusCode.NotFound,
    }),
};

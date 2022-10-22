import moment from 'moment';
import { ErrorType } from '../errors/user.error';
import { UserError } from '../errors';
import { CoreDataSource } from '../interfaces/data-source';
import { GetMostPopularCityActionPayload } from '../interfaces/actions';
import { MAX_PERIOD_DAYS } from '../constants';

export class GetMostPopularCityAction {
    constructor(
        private readonly payload: GetMostPopularCityActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        const fromMoment = moment(this.payload.from);
        const toMoment = moment(this.payload.to);

        if (toMoment.diff(fromMoment, 'days') > MAX_PERIOD_DAYS) {
            throw new UserError(ErrorType.BadRequest, 'limit_of_days');
        }

        const history = await this.dataSource.getHistoryByPeriod(this.payload);
        const calculatedHistory = history.reduce(
            (acc, curr) => acc.set(curr.cityId, acc.get(curr.cityId) || 0 + curr.count),
            new Map<number, number>(),
        );

        const [cityId, count] = Array
            .from(calculatedHistory)
            .sort((a, b) => b[1] - a[1])[0];

        if (!cityId) {
            return null;
        }

        const [city] = await this.dataSource.getCities([cityId]);

        return { ...city, count };
    }
}

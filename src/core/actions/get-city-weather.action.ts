import moment from 'moment';
import { ErrorType } from '../errors/user.error';
import { UserError } from '../errors';
import { CoreDataSource } from '../interfaces/data-source';
import { GetCityWeatherCoreActionPayload } from '../interfaces/actions';
import { MAX_PERIOD_DAYS } from '../constants';

export class GetCityWeatherCoreAction {
    constructor(
        private readonly payload: GetCityWeatherCoreActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        const fromMoment = moment(this.payload.from);
        const toMoment = moment(this.payload.to);

        if (toMoment.diff(fromMoment, 'days') > MAX_PERIOD_DAYS) {
            throw new UserError(ErrorType.BadRequest, 'limit_of_days');
        }

        const [city] = await this.dataSource.getCities([this.payload.cityId]);

        if (!city?.isActive) {
            throw new UserError(ErrorType.BadRequest, 'city_not_awaitable');
        }

        await this.dataSource.incrementSearchHistory(this.payload.cityId);
        return this.dataSource.getWeatherByPeriod(this.payload);
    }
}

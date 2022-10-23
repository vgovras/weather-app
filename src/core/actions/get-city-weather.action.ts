import moment from 'moment';
import { } from '../errors/user.error';
import { errors } from '../errors';
import { CoreDataSource } from '../interfaces/data-source';
import { GetCityWeatherCoreActionPayload } from '../interfaces/actions';
import { MAX_PERIOD_DAYS } from '../constants';

export class GetCityWeatherCoreAction {
    constructor(
        private readonly payload: GetCityWeatherCoreActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        const { cityId, from, to } = this.payload;
        const fromMoment = moment(from);
        const toMoment = moment(to);

        if (toMoment.diff(fromMoment, 'days') > MAX_PERIOD_DAYS) {
            throw errors.limitDaysInDiapason(MAX_PERIOD_DAYS);
        }

        const [city] = await this.dataSource.getCities([cityId]);

        if (!city) {
            throw errors.cityIsNotExists(cityId);
        }

        if (!city.isActive) {
            throw errors.cityIsNotAvailable(cityId);
        }

        await this.dataSource.incrementSearchHistory(cityId);
        return this.dataSource.getWeatherByPeriod(this.payload);
    }
}

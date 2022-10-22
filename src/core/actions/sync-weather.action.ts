import { ErrorType } from '../errors/user.error';
import { UserError } from '../errors';
import { CoreDataSource } from '../interfaces/data-source';
import { SyncWeatherActionPayload } from '../interfaces/actions';

export class SyncWeatherAction {
    constructor(
        private readonly payload: SyncWeatherActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        const [city] = await this.dataSource.getCities([this.payload.cityId]);

        if (!city) {
            throw new UserError(ErrorType.NotFound, 'city_not_created');
        }

        const weathers = await this.dataSource.getExternalWeather(city);
        return this.dataSource.saveWeather(weathers);
    }
}

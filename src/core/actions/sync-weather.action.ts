import { errors } from '../errors';
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
            throw errors.cityIsNotExists(this.payload.cityId);
        }

        if (!city.isActive) {
            throw errors.cityIsNotAvailable(this.payload.cityId);
        }

        const weathers = await this.dataSource.getExternalWeather(city);
        return this.dataSource.saveWeather(weathers);
    }
}

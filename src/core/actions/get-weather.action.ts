import { CoreDataSource } from '../interfaces/data-source';
import { GetWeatherCoreActionPayload } from '../interfaces/actions';

export class GetWeatherCoreAction {
    constructor(
        private readonly payload: GetWeatherCoreActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        // const weathers = await this.dataSource.getWeather();
    }
}

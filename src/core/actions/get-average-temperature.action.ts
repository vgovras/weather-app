import { CoreDataSource } from '../interfaces/data-source';
import { GetAverageTemperatureActionPayload } from '../interfaces/actions';

export class GetAverageTemperatureAction {
    constructor(
        private readonly payload: GetAverageTemperatureActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        // const weather = await this.dataSource.getWeather(this.payload);

        // if (!weather.length) {
        //     return 0;
        // }

        // const sumTemperature = weather.reduce(
        //     (sum, weatherData) => sum + (weatherData.tempMin + weatherData.tempMax) / 2,
        //     0,
        // );

        // return sumTemperature / weather.length;
    }
}

import { GetCityWeatherCoreAction } from './get-city-weather.action';

import { CoreDataSource } from '../interfaces/data-source';
import { GetCityWeatherCoreActionPayload } from '../interfaces/actions';

export class GetAverageCityTemperatureAction {
    constructor(
        private readonly payload: GetCityWeatherCoreActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        const getCityWeatherCoreAction = new GetCityWeatherCoreAction(this.payload, this.dataSource);
        const weathers = await getCityWeatherCoreAction.execute();

        const temperature = weathers.reduce(
            (temp, weather) => temp + (weather.tempMin + weather.tempMax) / 2,
            0,
        ) / weathers.length;

        return parseFloat(temperature.toFixed(2));
    }
}

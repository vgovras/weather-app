import { OpenWeatherClient } from '../../../src/lib/open-weather/interfaces';
import { crateOpenWeatherFixture } from '../fixtures/open-weather.fixtures';

export const openWeather: OpenWeatherClient = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    weaklyWeather: (...args: any[]) => Promise.resolve(crateOpenWeatherFixture()),
};

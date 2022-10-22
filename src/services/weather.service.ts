import { WeatherModel } from '../data/models';
import { BaseService } from './_base.service';
import { SyncWeatherAction } from '../core/actions/sync-weather.action';
import { SyncWeatherActionPayload } from '../core/interfaces/actions';
import { CoreDataSource } from '../core/interfaces/data-source';

export class WeatherService extends BaseService<WeatherModel> {
    constructor(
        model: WeatherModel,
        private readonly dataSource: CoreDataSource,
    ) {
        super(model);
    }

    async syncWeather(payload: SyncWeatherActionPayload) {
        const action = new SyncWeatherAction(payload, this.dataSource);

        return action.execute();
    }
}

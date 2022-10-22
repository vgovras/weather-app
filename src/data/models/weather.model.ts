import moment from 'moment';
import { Tables } from '../constants';
import { BaseModel } from './_base.model';
import { dummyLogger } from '../../lib/dummy-logger';
import { Pool } from '../interfaces/pool';
import { Weather } from '../interfaces/entities';

export class WeatherModel extends BaseModel<Weather> {
    constructor(db: Pool, logger = dummyLogger) {
        super(Tables.Weather, db, logger);
    }

    create(data: Weather) {
        const date = moment(data.date)
            .startOf('day')
            .toDate();

        return super.create({ ...data, date });
    }
}

import { Tables } from '../constants';
import { BaseModel } from './_base.model';
import { dummyLogger } from '../../lib/dummy-logger';
import { Pool } from '../interfaces/pool';
import { DbRecord, Weather } from '../interfaces/entities';
import { GetByPeriodParams } from '../../core/interfaces/data-source';

export class WeatherModel extends BaseModel<Weather> {
    constructor(db: Pool, logger = dummyLogger) {
        super(Tables.Weather, db, logger);
    }

    async getByPeriod(params: GetByPeriodParams) {
        return this.db<DbRecord<Weather>>(this.table)
            .select()
            .where({ cityId: params.cityId })
            .andWhereBetween('date', [params.from, params.to]);
    }
}

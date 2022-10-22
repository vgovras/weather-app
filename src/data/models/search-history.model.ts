import { Tables } from '../constants';
import { BaseModel } from './_base.model';
import { dummyLogger } from '../../lib/dummy-logger';
import { Pool } from '../interfaces/pool';
import { DbRecord, SearchHistoryItem } from '../interfaces/entities';
import { GetHistoryByPeriodParams } from '../../core/interfaces/data-source';

export class SearchHistoryModel extends BaseModel<SearchHistoryItem> {
    constructor(db: Pool, logger = dummyLogger) {
        super(Tables.SearchHistory, db, logger);
    }

    async getByPeriod(params: GetHistoryByPeriodParams) {
        return this.db<DbRecord<SearchHistoryItem>>(this.table)
            .select()
            .whereBetween('day', [params.from, params.to]);
    }
}

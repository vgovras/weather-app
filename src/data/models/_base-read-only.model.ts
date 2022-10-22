import { AnyObject, Entries } from 'interfaces/utility';
import helpers from '../helpers';

import { Tables } from '../constants';

import { QueryOptions, ValueOrArray } from '../interfaces/query';
import { Pool } from '../interfaces/pool';
import { Logger } from '../../core/interfaces/logger';

export class BaseReadOnlyModel<T extends object> {
    constructor(
        protected readonly table: Tables,
        protected readonly db: Pool,
        protected readonly logger: Logger,
    ) { }

    async find(params: ValueOrArray<T> = {}, options: QueryOptions<T> = {}): Promise<T[]> {
        this.logger.debug(`${this.table}_list =>`, JSON.stringify({ params, options }));
        const conditions = helpers.removeUndefinedProps(params);

        let query = this.db(this.table)
            .select()
            .orderBy(options.orderBy || 'id', options.sortOrder || 'desc')
            .offset(options.offset || 0);

        query = (Object.entries(conditions) as Entries<AnyObject>)
            .reduce(
                (accQuery, [key, value]) => (Array.isArray(value)
                    ? accQuery.whereIn(key, value)
                    : accQuery.where(key, value)),
                query,
            );

        return options.limit
            ? query.limit(options.limit)
            : query;
    }

    async findOne(params: ValueOrArray<T> = {}): Promise<T | undefined> {
        this.logger.debug(`${this.table}_findOne =>`, JSON.stringify(params));
        const conditions = helpers.removeUndefinedProps(params);

        const query = this.db(this.table)
            .select()
            .limit(1)
            .first();

        (Object.entries(conditions) as Entries<AnyObject>)
            .reduce(
                (accQuery, [key, value]) => (Array.isArray(value)
                    ? accQuery.whereIn(key, value)
                    : accQuery.where(key, value)),
                query,
            );

        return query;
    }
}

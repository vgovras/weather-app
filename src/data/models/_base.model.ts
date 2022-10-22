import helpers from '../helpers';

import { DbRecord } from '../interfaces/entities';

import { BaseReadOnlyModel } from './_base-read-only.model';

type NumberOnly<T> = { [P in keyof T as T[P] extends number | undefined ? P : never]: T[P] };
type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];
type Increment<T> = { id: number } & AtLeastOne<NumberOnly<T>>;

export class BaseModel<T extends object> extends BaseReadOnlyModel<DbRecord<T>> {
    async create(params: T): Promise<DbRecord<T>> {
        this.logger.debug(`${this.table}_create =>`, JSON.stringify(params));
        const data = helpers.removeUndefinedProps(params);

        const [res] = await this.db<DbRecord<T>>(this.table).insert(data).returning('*');

        return res;
    }

    async createIfNotExists(params: T & { conflictColumns: (keyof T)[] }): Promise<DbRecord<T>> {
        this.logger.debug(`${this.table}_create_if_not_exists =>`, JSON.stringify(params));
        const { conflictColumns, ...data } = helpers.removeUndefinedProps(params);

        const [res] = await this.db<DbRecord<T>>(this.table)
            .insert(data)
            .onConflict(conflictColumns as string[])
            .merge()
            .returning('*');

        return res;
    }

    async createManyIfNotExists(params: { conflictColumns: (keyof T)[]; values: T[] }): Promise<DbRecord<T>[]> {
        this.logger.debug(`${this.table}_create_many_if_not_exists =>`, JSON.stringify(params));
        const data = params.values.map(v => helpers.removeUndefinedProps(v));

        return this.db<DbRecord<T>>(this.table)
            .insert(data)
            .onConflict(params.conflictColumns as string[])
            .merge()
            .returning('*');
    }

    async delete(params: { id: number }): Promise<boolean> {
        this.logger.debug(`${this.table}_delete =>`, JSON.stringify(params));
        const conditions = helpers.removeUndefinedProps(params);

        const result = await this.db<T>(this.table).delete().where(conditions);

        return !!result;
    }

    async update(params: Partial<T> & { id: number }): Promise<DbRecord<T> | undefined> {
        this.logger.debug(`${this.table}_update =>`, params);

        const { id, ...updateData } = params;
        const data = helpers.removeUndefinedProps(updateData);

        const [result] = await this.db<DbRecord<T>>(this.table)
            .update(data)
            .where({ id })
            .returning('*');

        return result;
    }

    async increment(data: Increment<T>) {
        this.logger.debug(`${this.table}_increment =>`, JSON.stringify(data));
        const { id, ...rest } = data;

        const fieldName = Object.keys(rest)[0];
        const increment = Object.values(rest)[0] as number;

        return this.db(this.table)
            .increment(fieldName, increment)
            .where({ id });
    }
}

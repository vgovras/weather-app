// eslint-disable-next-line max-classes-per-file
import { Logger } from '../../core/interfaces/logger';

import { Tables } from '../constants';

import { BaseModel } from './_base.model';
import { Pool } from '../interfaces/pool';

export class ModelFactory {
    static createBase<T extends object>(table: Tables) {
        class Model extends BaseModel<T> {
            static getInstance(db: Pool, logger: Logger) {
                return new Model(db, logger);
            }

            constructor(db: Pool, logger: Logger) {
                super(table, db, logger);
            }
        }

        return Model;
    }
}

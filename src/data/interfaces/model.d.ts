import { QueryOptions } from './query';
import { DbRecord } from './entities';

export interface BaseModel<T> {
    list(params?: Partial<T>, options?: QueryOptions<T>): Promise<DbRecord<T>[]>;
    findOne(condition: Partial<T>): Promise<DbRecord<T> | undefined>;
    create(data: Partial<T>): Promise<DbRecord<T>>;
    update(data: Partial<T>): Promise<DbRecord<T> | undefined>;
    delete(data: { id: number }): Promise<boolean>;
}

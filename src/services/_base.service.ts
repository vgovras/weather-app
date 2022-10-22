import { BaseModel } from '../data/models/_base.model';

export class BaseService<T extends BaseModel<any>> {
    constructor(
        private readonly model: T,
    ) { }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getInstance(model: BaseModel<any>, ...args: any[]) {
        return new BaseService(model);
    }

    create(data: Parameters<T['create']>[0]) {
        return this.model.create(data) as ReturnType<T['create']>;
    }

    update(data: Parameters<T['update']>[0]) {
        return this.model.update(data) as ReturnType<T['update']>;
    }

    delete(data: Parameters<T['delete']>[0]) {
        return this.model.delete(data) as ReturnType<T['delete']>;
    }

    getItem(id: number) {
        return this.model.findOne({ id }) as ReturnType<T['findOne']>;
    }

    list(...args: Parameters<T['find']>) {
        return this.model.find(...args) as ReturnType<T['find']>;
    }
}

import { CoreDataSource } from 'core/interfaces/data-source';
import { GetAwaitableCitiesActionPayload } from '../interfaces/actions';

export class GetAwaitableCitiesAction {
    constructor(
        private readonly payload: GetAwaitableCitiesActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        const { offset = 0, limit = 5 } = this.payload;

        return this.dataSource.getActiveCities({ ...this.payload, offset, limit });
    }
}

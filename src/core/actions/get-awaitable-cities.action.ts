import { CoreDataSource } from 'core/interfaces/data-source';
import { GetAvailableCitiesActionPayload } from '../interfaces/actions';

export class GetAvailableCitiesAction {
    constructor(
        private readonly payload: GetAvailableCitiesActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        const { offset = 0, limit = 5 } = this.payload;

        return this.dataSource.getActiveCities({ ...this.payload, offset, limit });
    }
}

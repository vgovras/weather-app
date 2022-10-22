import { CoreDataSource } from 'core/interfaces/data-source';
import { GetCitiesActionPayload } from '../interfaces/actions';

export class GetCitiesCoreAction {
    constructor(
        private readonly payload: GetCitiesActionPayload,
        private readonly dataSource: CoreDataSource,
    ) { }

    async execute() {
        // return this.dataSource.getCities(this.payload);
    }
}

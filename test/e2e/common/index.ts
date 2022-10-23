import { Tables } from '../../../src/data/constants';
import { Pool } from '../../../src/data/interfaces/pool';

export const truncateAll = async (pool: Pool): Promise<void> => {
    const tables = Object.values(Tables);

    return pool.raw(`TRUNCATE ${tables.join(', ')} RESTART IDENTITY CASCADE;`);
};

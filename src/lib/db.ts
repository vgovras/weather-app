import { knex } from 'knex';
import { Pool } from '../data/interfaces/pool';
import { config } from '../config';

export const db: Pool = knex(config.db);

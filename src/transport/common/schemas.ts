import { SortOrder } from '../../data/enums';

export const listSchema = {
    limit: { type: 'number', positive: true, integer: true, optional: true },
    offset: { type: 'number', positive: true, integer: true, optional: true },
    orderBy: { type: 'string', max: 32, optional: true },
    sortOrder: { type: 'array', items: 'string', enum: Object.values(SortOrder), optional: true },
};

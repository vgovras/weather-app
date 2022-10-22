export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export interface QueryOptions<T> {
    offset?: number;
    limit?: number;
    orderBy?: keyof T;
    sortOrder?: SortOrder;
}

export type ValueOrArray<T> = {
    [P in keyof T]?: T[P] | T[P][];
};

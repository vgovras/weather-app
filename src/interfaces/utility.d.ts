export type Entries<T> = [keyof T, T[keyof T]][];

export type Callback<T> = (item: T) => void;

export interface AnyObject {
    [key: string]: any;
}

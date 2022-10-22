type NonUndefinedProp<T> = T extends undefined ? never : T;
type NoUndefined<T> = { [P in keyof T]: NonUndefinedProp<T[P]> };

// @ts-ignore
const removeUndefinedProps = <V>(params: V): NoUndefined<V> => (Object.keys(params) as Array<keyof V>)
    .reduce((acc, key) => (
        params[key] !== undefined
            ? ({ ...acc, [key]: params[key] })
            : acc
    ), {} as NoUndefined<V>);

export default { removeUndefinedProps };

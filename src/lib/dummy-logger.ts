import { Logger } from '../core/interfaces/logger';

export const dummyLogger = new Proxy({}, {
    get() {
        return () => {};
    },
}) as Logger;

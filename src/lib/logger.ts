import { Logger as TsLogger } from 'tslog';
import { AsyncLocalStorage } from 'async_hooks';
import { randomUUID } from 'crypto';

import { Logger } from '../core/interfaces/logger';

export const createTraceId = () => randomUUID().replace(/-/g, '');

export const asyncLocalStorage: AsyncLocalStorage<{ requestId: string }> = new AsyncLocalStorage();

export const logger: Logger = new TsLogger({
    displayDateTime: false,
    displayFunctionName: false,
    displayRequestId: true,
    requestId: () => asyncLocalStorage.getStore()?.requestId || createTraceId(),
});

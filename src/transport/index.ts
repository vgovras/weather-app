import 'express-async-errors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { config } from '../config';
import { router } from './controllers';

import { swagger } from './middlewares/swagger.middleware';
import { errorHandler } from './middlewares/error-handler.middleware';
import { tracer } from './middlewares/tracer.middleware';

import { logger } from '../lib/logger';

const app = express();

app.use(tracer);
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swagger);
app.use(errorHandler);

const server = app.listen(config.app.port, () => {
    logger.info(`The service started on port: ${config.app.port}, pid: ${process.pid}`);
});

export const stopServer = () => server.close((err) => new Promise<void>((resolve, reject) => {
    if (err) {
        logger.error('fail to stop server =>', err.message, err);
        reject(err);
    }

    resolve();
}));

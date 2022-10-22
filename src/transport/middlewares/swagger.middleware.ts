import fs from 'fs';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';

const swaggerDocument = fs.readFileSync(path.resolve(__dirname, '../../../swagger/main.yaml'), 'utf8');

export const swagger = swaggerUi.setup(
    YAML.parse(swaggerDocument),
    { swaggerOptions: { validatorUrl: null } },
);

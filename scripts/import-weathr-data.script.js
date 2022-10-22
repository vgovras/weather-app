const { services } = require('../dist/services');
const { db } = require('../dist/lib/db');
const { logger } = require('../dist/lib/logger');

(async () => {
    logger.debug('start_import');
    const pol = await services.country.create({ code: 'POL' });
    const warsaw = await services.city.create({ countryId: pol.id, name: 'Warsaw', latitude: 52.23, longitude: 21.01 });
    await services.weather.sync({ cityId: warsaw.id });

    const ukr = await services.country.create({ code: 'UKR' });
    const kyiv = await services.city.create({ countryId: ukr.id, name: 'Kyiv', latitude: 50.45, longitude: 30.52 });
    await services.weather.sync({ cityId: kyiv.id });

    const hun = await services.country.create({ code: 'HUN' });
    const budapest = await services.city.create({
        countryId: hun.id,
        name: 'Budapest',
        latitude: 50.45,
        longitude: 30.52,
    });
    await services.weather.sync({ cityId: budapest.id });

    await db.destroy();
    logger.debug('emd');
})();

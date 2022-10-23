import { randomUUID } from 'crypto';
import { Country, City } from '../../../src/data/interfaces/entities';

export const createCountryFixture = (): Country => ({
    code: randomUUID().substring(0, 2).toUpperCase(),
});

export const createCityFixture = (countryId: number, isActive = true): City => ({
    countryId,
    latitude: parseFloat((Math.random() * 100).toFixed(2)),
    longitude: parseFloat((Math.random() * 100).toFixed(2)),
    name: randomUUID().substring(0, 5),
    isActive,
});

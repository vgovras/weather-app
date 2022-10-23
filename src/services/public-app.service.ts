import { Knex } from 'knex';
import { Pool } from '../data/interfaces/pool';
import { CoreDataSource } from '../core/interfaces/data-source';

import { GetAvailableCitiesAction } from '../core/actions/get-awaitable-cities.action';
import { GetCityWeatherCoreAction } from '../core/actions/get-city-weather.action';
import { GetAverageCityTemperatureAction } from '../core/actions/get-available-city-temperature.action';
import { GetMostPopularCityAction } from '../core/actions/get-most-popular-city.action';

import {
    GetAvailableCitiesActionPayload,
    GetCityWeatherCoreActionPayload,
    GetAverageCityTemperatureActionPayload,
    GetMostPopularCityActionPayload,
} from '../core/interfaces/actions';

import { configureModels } from '../data/models';

import { DataSource } from '../data/data-source';
import { db as pool } from '../lib/db';

type ActionExec = { execute: () => Promise<any> };
type ActionRes<T extends ActionExec> = ReturnType<T['execute']>;

export class PublicAppService {
    #transaction: Knex.Transaction;

    constructor(
        private readonly dataSource: CoreDataSource,
    ) { }

    async getAvailableCities(payload: GetAvailableCitiesActionPayload) {
        const action = new GetAvailableCitiesAction(payload, this.dataSource);

        return action.execute();
    }

    async getCityWeather(payload: GetCityWeatherCoreActionPayload) {
        const dataSource = await this.createTransactionDataSource(payload.cityId);
        const action = new GetCityWeatherCoreAction(payload, dataSource);

        return this.executeTransaction(action);
    }

    async getAverageCityTemperature(payload: GetAverageCityTemperatureActionPayload) {
        const action = new GetAverageCityTemperatureAction(payload, this.dataSource);

        return action.execute();
    }

    async getMostPopularCity(payload: GetMostPopularCityActionPayload) {
        const action = new GetMostPopularCityAction(payload, this.dataSource);

        return action.execute();
    }

    private getDataSource(db: Pool): CoreDataSource {
        return new DataSource(configureModels(db));
    }

    private async createTransactionDataSource(id: number): Promise<CoreDataSource> {
        this.#transaction = await new Promise((resolve) => {
            pool.transaction(resolve);
        });

        await this.#transaction.raw('SELECT pg_advisory_xact_lock(hashtext(?))', id);

        return this.getDataSource(this.#transaction);
    }

    private async executeTransaction<T extends ActionExec>(action: T): Promise<ActionRes<T>> {
        return action.execute()
            .then((r: ActionRes<T>) => {
                this.#transaction.commit();
                return r;
            })
            .catch((e: any) => {
                this.#transaction.rollback();
                throw e;
            });
    }
}

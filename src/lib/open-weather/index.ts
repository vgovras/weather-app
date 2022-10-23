import { Axios } from 'axios';
import path from 'path';
import { config } from '../../config';
import { OpenWeatherClient, WeaklyWeather } from './interfaces';
import { Entries } from '../../interfaces/utility';

const objectToRecord = (o: object): Record<string, string> => (Object.entries(o) as Entries<Object>)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: String(value) }), {});

const buildUrl = <T extends object>(url: string, queryParams: T) => {
    const params = new URLSearchParams(objectToRecord(queryParams));

    return path.join(url, `?${params}`);
};

const createOpenWeatherClient = ({ baseURL, apiKey } = config.openWeather): OpenWeatherClient => {
    if (!baseURL) {
        throw new Error('the prop openWeather.baseURL should be defined in config');
    }

    if (!apiKey) {
        throw new Error('the prop openWeather.apiKey should be defined in config');
    }

    const axios = new Axios({ baseURL });

    return {
        async weaklyWeather(data: Omit<WeaklyWeather.Data, 'appid'>): Promise<WeaklyWeather.Result> {
            const url = buildUrl<WeaklyWeather.Data>(
                '/data/2.5/forecast',
                { ...data, appid: apiKey },
            );

            return axios
                .get<WeaklyWeather.Result>(url)
                .then(response => (typeof response.data === 'string' ? JSON.parse(response.data) : response.data));
        },
    };
};

export const openWeather = createOpenWeatherClient();

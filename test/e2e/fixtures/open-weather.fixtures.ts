import { WeaklyWeather } from '../../../src/lib/open-weather/interfaces';

export const crateOpenWeatherFixture = (): WeaklyWeather.Result => ({
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
        {
            dt: 1666386000,
            main: {
                temp: 277.99,
                feels_like: 275.97,
                temp_min: 277.99,
                temp_max: 278.57,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 1004,
                humidity: 88,
                temp_kf: -0.58,
            },
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 67,
            },
            wind: {
                speed: 2.38,
                deg: 170,
                gust: 4.76,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-21 21:00:00',
        },
        {
            dt: 1666396800,
            main: {
                temp: 277.98,
                feels_like: 275.67,
                temp_min: 277.98,
                temp_max: 278.12,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1004,
                humidity: 73,
                temp_kf: -0.14,
            },
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 81,
            },
            wind: {
                speed: 2.71,
                deg: 171,
                gust: 6.66,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-22 00:00:00',
        },
        {
            dt: 1666407600,
            main: {
                temp: 278.2,
                feels_like: 275.71,
                temp_min: 278.2,
                temp_max: 278.2,
                pressure: 1023,
                sea_level: 1023,
                grnd_level: 1002,
                humidity: 58,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 3.01,
                deg: 170,
                gust: 8.55,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-22 03:00:00',
        },
        {
            dt: 1666418400,
            main: {
                temp: 279.23,
                feels_like: 276.35,
                temp_min: 279.23,
                temp_max: 279.23,
                pressure: 1022,
                sea_level: 1022,
                grnd_level: 1001,
                humidity: 58,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 3.97,
                deg: 162,
                gust: 10.74,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-22 06:00:00',
        },
        {
            dt: 1666429200,
            main: {
                temp: 282.9,
                feels_like: 280.37,
                temp_min: 282.9,
                temp_max: 282.9,
                pressure: 1021,
                sea_level: 1021,
                grnd_level: 1001,
                humidity: 46,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 5.16,
                deg: 176,
                gust: 9.78,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-22 09:00:00',
        },
        {
            dt: 1666440000,
            main: {
                temp: 284.07,
                feels_like: 282.55,
                temp_min: 284.07,
                temp_max: 284.07,
                pressure: 1019,
                sea_level: 1019,
                grnd_level: 999,
                humidity: 51,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.52,
                deg: 176,
                gust: 8.91,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-22 12:00:00',
        },
        {
            dt: 1666450800,
            main: {
                temp: 283.43,
                feels_like: 282.03,
                temp_min: 283.43,
                temp_max: 283.43,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 997,
                humidity: 58,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 84,
            },
            wind: {
                speed: 3.62,
                deg: 162,
                gust: 9.33,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-22 15:00:00',
        },
        {
            dt: 1666461600,
            main: {
                temp: 282.14,
                feels_like: 280.36,
                temp_min: 282.14,
                temp_max: 282.14,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 997,
                humidity: 66,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 65,
            },
            wind: {
                speed: 3.15,
                deg: 178,
                gust: 9.57,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-22 18:00:00',
        },
        {
            dt: 1666472400,
            main: {
                temp: 282.2,
                feels_like: 280.41,
                temp_min: 282.2,
                temp_max: 282.2,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 996,
                humidity: 68,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 3.18,
                deg: 183,
                gust: 7.74,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-22 21:00:00',
        },
        {
            dt: 1666483200,
            main: {
                temp: 281.19,
                feels_like: 279.59,
                temp_min: 281.19,
                temp_max: 281.19,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 995,
                humidity: 74,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.58,
                deg: 194,
                gust: 6.21,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-23 00:00:00',
        },
        {
            dt: 1666494000,
            main: {
                temp: 281.38,
                feels_like: 279.88,
                temp_min: 281.38,
                temp_max: 281.38,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 994,
                humidity: 71,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.49,
                deg: 242,
                gust: 6.11,
            },
            visibility: 10000,
            pop: 0.29,
            rain: {
                '3h': 0.14,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-23 03:00:00',
        },
        {
            dt: 1666504800,
            main: {
                temp: 280.91,
                feels_like: 279.37,
                temp_min: 280.91,
                temp_max: 280.91,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 995,
                humidity: 89,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.44,
                deg: 238,
                gust: 5.5,
            },
            visibility: 10000,
            pop: 0.95,
            rain: {
                '3h': 1.18,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-23 06:00:00',
        },
        {
            dt: 1666515600,
            main: {
                temp: 282.27,
                feels_like: 280.76,
                temp_min: 282.27,
                temp_max: 282.27,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 995,
                humidity: 89,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.76,
                deg: 279,
                gust: 7.01,
            },
            visibility: 10000,
            pop: 0.41,
            rain: {
                '3h': 0.23,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-23 09:00:00',
        },
        {
            dt: 1666526400,
            main: {
                temp: 285.27,
                feels_like: 284.44,
                temp_min: 285.27,
                temp_max: 285.27,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 995,
                humidity: 73,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.44,
                deg: 314,
                gust: 8.07,
            },
            visibility: 10000,
            pop: 0.17,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-23 12:00:00',
        },
        {
            dt: 1666537200,
            main: {
                temp: 284.12,
                feels_like: 283.44,
                temp_min: 284.12,
                temp_max: 284.12,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 996,
                humidity: 83,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 93,
            },
            wind: {
                speed: 2.7,
                deg: 309,
                gust: 7.08,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-23 15:00:00',
        },
        {
            dt: 1666548000,
            main: {
                temp: 284.3,
                feels_like: 283.77,
                temp_min: 284.3,
                temp_max: 284.3,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 997,
                humidity: 88,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 90,
            },
            wind: {
                speed: 3.36,
                deg: 290,
                gust: 9.35,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-23 18:00:00',
        },
        {
            dt: 1666558800,
            main: {
                temp: 284.57,
                feels_like: 283.93,
                temp_min: 284.57,
                temp_max: 284.57,
                pressure: 1018,
                sea_level: 1018,
                grnd_level: 998,
                humidity: 83,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.45,
                deg: 297,
                gust: 10.8,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-23 21:00:00',
        },
        {
            dt: 1666569600,
            main: {
                temp: 284.11,
                feels_like: 283.51,
                temp_min: 284.11,
                temp_max: 284.11,
                pressure: 1018,
                sea_level: 1018,
                grnd_level: 998,
                humidity: 86,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 3.89,
                deg: 299,
                gust: 9.25,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-24 00:00:00',
        },
        {
            dt: 1666580400,
            main: {
                temp: 283.72,
                feels_like: 283.16,
                temp_min: 283.72,
                temp_max: 283.72,
                pressure: 1019,
                sea_level: 1019,
                grnd_level: 999,
                humidity: 89,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.58,
                deg: 297,
                gust: 6.88,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-24 03:00:00',
        },
        {
            dt: 1666591200,
            main: {
                temp: 283.86,
                feels_like: 283.31,
                temp_min: 283.86,
                temp_max: 283.86,
                pressure: 1020,
                sea_level: 1020,
                grnd_level: 1000,
                humidity: 89,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.22,
                deg: 287,
                gust: 5.57,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-24 06:00:00',
        },
        {
            dt: 1666602000,
            main: {
                temp: 285.12,
                feels_like: 284.46,
                temp_min: 285.12,
                temp_max: 285.12,
                pressure: 1021,
                sea_level: 1021,
                grnd_level: 1001,
                humidity: 80,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.05,
                deg: 292,
                gust: 3.85,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-24 09:00:00',
        },
        {
            dt: 1666612800,
            main: {
                temp: 286.62,
                feels_like: 285.88,
                temp_min: 286.62,
                temp_max: 286.62,
                pressure: 1020,
                sea_level: 1020,
                grnd_level: 1000,
                humidity: 71,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.82,
                deg: 260,
                gust: 2.91,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-24 12:00:00',
        },
        {
            dt: 1666623600,
            main: {
                temp: 285.55,
                feels_like: 284.93,
                temp_min: 285.55,
                temp_max: 285.55,
                pressure: 1020,
                sea_level: 1020,
                grnd_level: 1000,
                humidity: 80,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.17,
                deg: 206,
                gust: 1.16,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-24 15:00:00',
        },
        {
            dt: 1666634400,
            main: {
                temp: 284.57,
                feels_like: 284.04,
                temp_min: 284.57,
                temp_max: 284.57,
                pressure: 1020,
                sea_level: 1020,
                grnd_level: 1000,
                humidity: 87,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 99,
            },
            wind: {
                speed: 1.8,
                deg: 196,
                gust: 1.76,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-24 18:00:00',
        },
        {
            dt: 1666645200,
            main: {
                temp: 284.76,
                feels_like: 284.14,
                temp_min: 284.76,
                temp_max: 284.76,
                pressure: 1019,
                sea_level: 1019,
                grnd_level: 999,
                humidity: 83,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.83,
                deg: 205,
                gust: 2.86,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-24 21:00:00',
        },
        {
            dt: 1666656000,
            main: {
                temp: 284.55,
                feels_like: 283.91,
                temp_min: 284.55,
                temp_max: 284.55,
                pressure: 1019,
                sea_level: 1019,
                grnd_level: 999,
                humidity: 83,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.12,
                deg: 192,
                gust: 4.37,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-25 00:00:00',
        },
        {
            dt: 1666666800,
            main: {
                temp: 284.31,
                feels_like: 283.7,
                temp_min: 284.31,
                temp_max: 284.31,
                pressure: 1018,
                sea_level: 1018,
                grnd_level: 998,
                humidity: 85,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.21,
                deg: 192,
                gust: 6.22,
            },
            visibility: 10000,
            pop: 0.28,
            rain: {
                '3h': 0.41,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-25 03:00:00',
        },
        {
            dt: 1666677600,
            main: {
                temp: 284.23,
                feels_like: 283.61,
                temp_min: 284.23,
                temp_max: 284.23,
                pressure: 1018,
                sea_level: 1018,
                grnd_level: 998,
                humidity: 85,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.5,
                deg: 227,
                gust: 6.39,
            },
            visibility: 10000,
            pop: 0.39,
            rain: {
                '3h': 0.3,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-25 06:00:00',
        },
        {
            dt: 1666688400,
            main: {
                temp: 285.03,
                feels_like: 284.41,
                temp_min: 285.03,
                temp_max: 285.03,
                pressure: 1018,
                sea_level: 1018,
                grnd_level: 998,
                humidity: 82,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.03,
                deg: 204,
                gust: 4.85,
            },
            visibility: 10000,
            pop: 0.76,
            rain: {
                '3h': 1.36,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-25 09:00:00',
        },
        {
            dt: 1666699200,
            main: {
                temp: 285.3,
                feels_like: 284.71,
                temp_min: 285.3,
                temp_max: 285.3,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 998,
                humidity: 82,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.29,
                deg: 212,
                gust: 1.93,
            },
            visibility: 10000,
            pop: 0.52,
            rain: {
                '3h': 0.24,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-25 12:00:00',
        },
        {
            dt: 1666710000,
            main: {
                temp: 284.81,
                feels_like: 284.28,
                temp_min: 284.81,
                temp_max: 284.81,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 997,
                humidity: 86,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.65,
                deg: 196,
                gust: 2.41,
            },
            visibility: 10000,
            pop: 0.86,
            rain: {
                '3h': 0.46,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-25 15:00:00',
        },
        {
            dt: 1666720800,
            main: {
                temp: 284.43,
                feels_like: 283.99,
                temp_min: 284.43,
                temp_max: 284.43,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 997,
                humidity: 91,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.81,
                deg: 225,
                gust: 3.57,
            },
            visibility: 10000,
            pop: 0.74,
            rain: {
                '3h': 0.21,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-25 18:00:00',
        },
        {
            dt: 1666731600,
            main: {
                temp: 284.44,
                feels_like: 284.05,
                temp_min: 284.44,
                temp_max: 284.44,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 997,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.93,
                deg: 226,
                gust: 3.86,
            },
            visibility: 10000,
            pop: 0.21,
            rain: {
                '3h': 0.18,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-25 21:00:00',
        },
        {
            dt: 1666742400,
            main: {
                temp: 284.38,
                feels_like: 284.04,
                temp_min: 284.38,
                temp_max: 284.38,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 996,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.98,
                deg: 269,
                gust: 4.93,
            },
            visibility: 10000,
            pop: 0.21,
            rain: {
                '3h': 0.17,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-26 00:00:00',
        },
        {
            dt: 1666753200,
            main: {
                temp: 284.33,
                feels_like: 284.04,
                temp_min: 284.33,
                temp_max: 284.33,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 996,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.02,
                deg: 295,
                gust: 5.34,
            },
            visibility: 10000,
            pop: 0.8,
            rain: {
                '3h': 0.93,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-26 03:00:00',
        },
        {
            dt: 1666764000,
            main: {
                temp: 284.45,
                feels_like: 284.12,
                temp_min: 284.45,
                temp_max: 284.45,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 996,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.7,
                deg: 270,
                gust: 7.18,
            },
            visibility: 10000,
            pop: 0.63,
            rain: {
                '3h': 0.44,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-26 06:00:00',
        },
        {
            dt: 1666774800,
            main: {
                temp: 287.03,
                feels_like: 286.54,
                temp_min: 287.03,
                temp_max: 287.03,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 997,
                humidity: 79,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.14,
                deg: 291,
                gust: 7.1,
            },
            visibility: 10000,
            pop: 0.24,
            rain: {
                '3h': 0.2,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-26 09:00:00',
        },
        {
            dt: 1666785600,
            main: {
                temp: 287.6,
                feels_like: 287.01,
                temp_min: 287.6,
                temp_max: 287.6,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 997,
                humidity: 73,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.95,
                deg: 301,
                gust: 7.81,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'd',
            },
            dt_txt: '2022-10-26 12:00:00',
        },
        {
            dt: 1666796400,
            main: {
                temp: 285.8,
                feels_like: 285.13,
                temp_min: 285.8,
                temp_max: 285.8,
                pressure: 1018,
                sea_level: 1018,
                grnd_level: 999,
                humidity: 77,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n',
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.39,
                deg: 308,
                gust: 8.09,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
                '3h': 0.18,
            },
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-26 15:00:00',
        },
        {
            dt: 1666807200,
            main: {
                temp: 284.06,
                feels_like: 283.43,
                temp_min: 284.06,
                temp_max: 284.06,
                pressure: 1019,
                sea_level: 1019,
                grnd_level: 999,
                humidity: 85,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            clouds: {
                all: 77,
            },
            wind: {
                speed: 3.4,
                deg: 283,
                gust: 9.13,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2022-10-26 18:00:00',
        },
    ],
    city: {
        id: 696050,
        name: 'Pushcha-Vodytsya',
        coord: {
            lat: 50.45,
            lon: 30.52,
        },
        country: 'UA',
        population: 0,
        timezone: 10800,
        sunrise: 1666326576,
        sunset: 1666364114,
    },
});

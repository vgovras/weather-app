export const config = {
    app: {
        port: parseInt(process.env.APP_PORT || '3000', 10),
    },
    openWeather: {
        baseURL: 'https://api.openweathermap.org',
        apiKey: process.env.OPEN_WEATHER_API_KEY,
    },
    db: {
        client: 'pg',
        pool: { min: 0, max: 7 },
        connection: {
            host: process.env.PG_HOST,
            port: parseInt(process.env.PG_PORT || '5432', 10),
            user: process.env.PG_USER,
            password: process.env.PG_PASS,
            database: process.env.PG_NAME,
        },
    },
};

# The Weather app

## Running e2e tests
```bash
npm run test:e2e
```

## Import some Europe countries from open weather API
```bash
docker exec -it weather-app node /app/scripts/import-weather-data.script.js
```

## Running server for using or manual testing
```bash
npm run start:container
```

## Swagger documentation
`http://localhost:3000/api-docs`
After starting the service, you can cat access to the swagger documentation

<img width="739" alt="image" src="https://user-images.githubusercontent.com/26094358/197353699-81d281ba-117c-42ca-9fd9-ab4c9c251859.png">

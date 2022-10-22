# Weather app

## Running service
```bash
cd ./docker && docker-compose up
```

## Running scrip to import data from api
```bash
# I recommend doing this in a container
node ./scripts/import-weathr-data.script.js
```

## Swagger
`http://localhost:3000/api-docs`
After startting the service you can cat access to the swagger documentation

<img width="739" alt="image" src="https://user-images.githubusercontent.com/26094358/197353699-81d281ba-117c-42ca-9fd9-ab4c9c251859.png">

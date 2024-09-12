# Api TO-DOs

## DB
### Build the development DB Docker image
Dentro da pasta db:  
```docker build -t todo-db:v1.0 .```

### Start the DB from the Docker image
```docker run -e POSTGRES_PASSWORD=minha_senha_secreta --name todo-db --net=host -d todo-db:v1.0```

## Api
### Build the API
```npm run build```

### Run the API in development
```npm run dev```

### Run the API in production
```npm start```

### Build the API's Docker image
Na pasta API:
```docker build -t todo-api:v1.0 .```

### Running the API's Docker Image
```docker run -e DB_PASSWORD=my_secret_password --name todo-api --net=host -d todo-api:v1.0```
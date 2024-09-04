# Api TO-DOs

## DB
### Build da imagem do DB
Dentro da pasta db:  
```docker build -t todo-db:v1.0 .```

### Iniciar DB
```docker run -e POSTGRES_PASSWORD=minha_senha_secreta --name todo-db --net=host -d todo-db:v1.0```

## Api
### Build
```npm run build```

### Rodar em modo dev
```npm run dev```

### Rodar em modo prod
```npm start```

### Build da imagem da API
Na pasta API:
```docker build -t todo-api:v1.0 .```

### Iniciar api no Docker
```docker run -e DB_PASSWORD=minha_senha_secreta --name todo-api --net=host -d todo-api:v1.0```
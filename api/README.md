# Api TO-DOs

## DB
### Build da imagem do DB
Dentro da pasta db:  
```docker build -t todo-db:v1.0 .```

### Iniciar DB
```docker run -e POSTGRES_PASSWORD=minha_senha_secreta --name todo-db -p 5432:5432 -d todo-db:v1.0```

## Api
### Build
```npm run build```

### Rodar em modo dev
```npm run dev```

### Rodar em modo prod
```npm start```
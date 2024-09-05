# TO-DOs WEB

## Instalar dependências
```npm install```

## Rodar aplicação em modo desenvolvimento
```npm start```

## Build da aplicação
```npm run build```

## Build da imagem docker
Na pasta web:
```docker build -t todo-web:v1.0```

## Rodar imagem docker
```docker run --rm -d --name todo-web -p 3000:3000 todo-web:v1.0```
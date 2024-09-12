# TO-DOs WEB

## Install dependencies
```npm install```

## Run in development
```npm start```

## Build the application
```npm run build```

## Build the Docker image
Na pasta web:
```docker build -t todo-web:v1.0```

## Run the Docker image
```docker run --rm -d --name todo-web -p 3000:3000 todo-web:v1.0```
# Deploy kubernetes

## Realizar build das imagens db, api e web
```bash
cd api/db && \
docker build -t todo-db:v1.0 . && \
cd .. && \
docker build -t todo-api:v1.0 . && \
cd ../web && \
docker build -t todo-web:v1.0 .
```

## Kind
### Criar cluster
```kind create cluster --config todo-cluster.yaml```

### Carregar imagens no Kind
```bash
kind load docker-image todo-db:v1.0 && \
kind load docker-image todo-api:v1.0 && \
kind load docker-image todo-web:v1.0
```

### Realizar deploy db, api e web
```bash
cd api/db && \
kubectl apply -f db-deployment.yaml && \
cd .. && \
kubectl apply -f api-deployment.yaml && \
cd ../web && \
kubectl apply -f web-deployment.yaml
```

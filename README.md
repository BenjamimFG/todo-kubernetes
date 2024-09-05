# Deploy kubernetes

## 1. Realizar build das imagens db, api e web
```bash
cd api/db && \
docker build -t todo-db:v1.0 . && \
cd .. && \
docker build -t todo-api:v1.0 . && \
cd ../web && \
docker build -t todo-web:v1.0 .
```

## 2. Kind
### 2.1. Criar cluster
```kind create cluster --config todo-cluster.yaml```

### 2.2 Carregar imagens no Kind
```bash
kind load docker-image todo-db:v1.0 && \
kind load docker-image todo-api:v1.0 && \
kind load docker-image todo-web:v1.0
```

## 3. Kubernetes
### 3.1 Realizar deploy db, api e web
```bash
cd api/db && \
kubectl apply -f db-deployment.yaml && \
cd .. && \
kubectl apply -f api-deployment.yaml && \
cd ../web && \
kubectl apply -f web-deployment.yaml
```

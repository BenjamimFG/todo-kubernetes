FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:22-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=build /app/package*.json ./

RUN npm install

COPY --from=build /app/dist ./dist

ENTRYPOINT ["node", "dist/index.js"]
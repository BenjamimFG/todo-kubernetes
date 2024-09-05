FROM postgres:16.4-alpine3.20

ENV POSTGRES_USER todo
ENV POSTGRES_DB todo

EXPOSE 5432

COPY migrations/* /docker-entrypoint-initdb.d

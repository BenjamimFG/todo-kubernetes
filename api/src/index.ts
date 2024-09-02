import express from "express";
import todoRouter from "./routes/todo.routes";
import databaseService from "./services/db.service";

const app = express();

app.use("/todos", todoRouter);

app.listen("3000");

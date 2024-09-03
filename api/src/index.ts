import express from "express";
import todoRouter from "./routes/todo.routes";

const app = express();

app.use("/todos", todoRouter);

app.listen("3000");

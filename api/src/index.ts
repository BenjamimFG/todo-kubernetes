import express from "express";
import cors from "cors";

import todoRouter from "./routes/todo.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/todos", todoRouter);

app.listen("3001");

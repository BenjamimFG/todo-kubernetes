import { Router } from "express";
import databaseService from "../services/db.service";

const todoRouter = Router();

todoRouter.get("/", async (_req, res) => {
  const todos = await databaseService.getTodos();

  res.send({ data: todos });
});

todoRouter.post("/");

todoRouter.patch("/:todoId");

export default todoRouter;

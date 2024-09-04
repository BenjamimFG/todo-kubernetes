import { Router } from "express";
import databaseService from "../services/db.service";

const todoRouter = Router();

todoRouter.get("/", async (_req, res) => {
  const todos = await databaseService.getTodos();

  res.send({ data: todos });
});

todoRouter.post("/", async (req, res) => {
  const { task } = req.body;

  if (typeof task !== "string")
    return res
      .status(400)
      .send({ error: "Parâmetro Task deve ser uma string." });

  if (task.length === 0)
    return res
      .status(400)
      .send({ error: "Task deve possuir pelo menos 1 caractere." });

  const todo = await databaseService.createTodo(task);

  return res.status(201).send({ data: todo });
});

todoRouter.patch("/:todoId", async (req, res) => {
  const todoId = Number.parseInt(req.params.todoId);
  const { done } = req.body;

  if (Number.isNaN(todoId))
    return res
      .status(400)
      .send({ error: "Parâmetro de rota todoId deve ser um inteiro válido." });

  if (typeof done !== "boolean")
    return res
      .status(400)
      .send({ error: "Parâmetro done deve ser um booleano." });

  const todo = await databaseService.patchTodo(todoId, done);

  return res.send({ data: todo });
});

todoRouter.delete("/:todoId", async (req, res) => {
  const todoId = Number.parseInt(req.params.todoId);

  if (Number.isNaN(todoId))
    return res
      .status(400)
      .send({ error: "Parâmetro de rota todoId deve ser um inteiro válido." });

  const success = await databaseService.deleteTodo(todoId);

  if (!success) return res.status(500).send({ error: "Erro ao deletar todo" });

  return res.sendStatus(204);
});

export default todoRouter;

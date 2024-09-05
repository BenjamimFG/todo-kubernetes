import { Pool } from "pg";
import Todo from "../models/Todo";

const pool = new Pool({
  host: process.env.DB_HOST ?? "0.0.0.0",
  port: 5432,
  user: "todo",
  database: "todo",
  password: process.env.DB_PASSWORD ?? "12345",
});

pool.on("error", (err, _client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

class DatabaseService {
  public async getTodos() {
    const client = await pool.connect();

    const res = await client.query<Todo>("SELECT id, task, done FROM todos;");

    client.release();

    return res.rows;
  }

  public async createTodo(task: string) {
    const client = await pool.connect();

    const res = await client.query<Todo>(
      "INSERT INTO todos (task) VALUES ($1) RETURNING id, task, done;",
      [task]
    );

    client.release();

    return res.rows[0];
  }

  public async patchTodo(id: number, done: boolean) {
    const client = await pool.connect();

    const res = await client.query<Todo>(
      "UPDATE todos SET done = $1 WHERE id = $2 RETURNING id, task, done;",
      [done, id]
    );

    client.release();

    return res.rows[0];
  }

  public async deleteTodo(id: number) {
    const client = await pool.connect();

    const res = await client.query("DELETE FROM todos WHERE id = $1;", [id]);

    client.release();

    return true;
  }
}

const databaseService = new DatabaseService();

export default databaseService;

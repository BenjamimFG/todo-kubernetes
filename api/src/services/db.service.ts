import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "todo",
  database: "todo",
  password: "12345",
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
}

const databaseService = new DatabaseService();

export default databaseService;

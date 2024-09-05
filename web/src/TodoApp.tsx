import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function TodoApp() {
  const [fetchTodos, setFetchTodos] = useState<boolean>(true);

  return (
    <main>
      <TodoForm setFetchTodos={setFetchTodos} />
      <TodoList fetchTodos={fetchTodos} setFetchTodos={setFetchTodos} />
    </main>
  );
}

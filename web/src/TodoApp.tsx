import { Component, ReactNode } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class TodoApp extends Component {
  render(): ReactNode {
    return (
      <main>
        <TodoForm />
        <TodoList />
      </main>
    );
  }
}

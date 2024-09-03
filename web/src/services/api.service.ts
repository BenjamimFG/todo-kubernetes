import { randomInt } from "crypto";
import Todo from "../models/Todo";

const mockTodos: Todo[] = [
  {
    id: 0,
    task: "Lavar o carro",
    done: false,
  },
  {
    id: 0,
    task: "Polir o carro",
    done: false,
  },
];

// TODO: Implementar integração com a API
export default class ApiService {
  public static async getTodos(): Promise<Todo[]> {
    return new Promise((resolve, _reject) => resolve(mockTodos));
  }

  public static async createTodo(task: string): Promise<Todo> {
    const mockCreatedTodo = {
      id: randomInt(2, 999),
      task,
      done: false,
    };

    return new Promise((resolve, _reject) => resolve(mockCreatedTodo));
  }

  public static async patchTodo(
    id: number,
    done: boolean
  ): Promise<Omit<Todo, "task">> {
    const mockPatchedTodo = {
      id,
      done,
    };

    return new Promise((resolve, _reject) => resolve(mockPatchedTodo));
  }
}

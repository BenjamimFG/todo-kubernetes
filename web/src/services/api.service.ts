import Todo from "../models/Todo";

const mockTodos: Todo[] = [
  {
    id: 0,
    task: "Lavar o carro",
    done: false,
  },
  {
    id: 1,
    task: "Polir o carro",
    done: false,
  },
];

const baseUrl = process.env.REACT_APP_API_URL;

// TODO: Implementar integração com a API
export default class ApiService {
  public static async getTodos(): Promise<Todo[]> {
    return fetch(`${baseUrl}/todos`)
      .then((res: Response) => res.json())
      .then((json) => json.data);
  }

  public static async createTodo(task: string): Promise<Todo> {
    return fetch(`${baseUrl}/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task }),
    })
      .then((res) => res.json())
      .then((json) => json.data);
  }

  public static async patchTodo(id: number, done: boolean): Promise<Todo> {
    return fetch(`${baseUrl}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: done }),
    })
      .then((res) => res.json())
      .then((json) => json.data);
  }

  public static async deleteTodo(id: number) {
    return fetch(`${baseUrl}/todos/${id}`, {
      method: "DELETE",
    });
  }
}

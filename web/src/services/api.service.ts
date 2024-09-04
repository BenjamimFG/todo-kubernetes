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

// TODO: Implementar integração com a API
export default class ApiService {
  public static async getTodos(): Promise<Todo[]> {
    return new Promise((resolve, _reject) => resolve(mockTodos));
  }

  public static async createTodo(task: string): Promise<Todo> {
    const mockId = mockTodos.length;

    const mockCreatedTodo = {
      id: mockId,
      task,
      done: false,
    };

    mockTodos[mockId] = mockCreatedTodo;

    return new Promise((resolve, _reject) => resolve(mockTodos[mockId]));
  }

  public static async patchTodo(id: number, done: boolean): Promise<Todo> {
    return new Promise((resolve, reject) => {
      if (!mockTodos[id]) return reject(`Todo com id ${id} não existe.`);

      mockTodos[id].done = done;

      return resolve(mockTodos[id]);
    });
  }
}

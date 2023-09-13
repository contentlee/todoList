import { http } from "@api/api";

export interface BaseTodo {
  date: string;
  title: string;
  content: string;
  place: {
    marker: string;
    name: string;
    lat: number;
    lng: number;
  };
  category: string;
}

export interface ReqTodo extends BaseTodo {
  is_completed: boolean;
  is_held: boolean;
}

export interface ResTodo extends ReqTodo {
  id: string;
  write_date: string;
  edit_date: string;
}

export const getTodo = async (date: string, id: string): Promise<ResTodo> => await http.get(`todo/${date}/${id}`);

export const getTodos = async (date: string): Promise<ResTodo[]> => await http.get(`todo/${date}`);

export const createTodo = async (todo: ReqTodo) => await http.post("todo/add", todo);

export const changeTodoState = async ({
  type,
  id,
  val,
}: {
  type: "todo" | "hold" | "complete";
  id: string;
  val: boolean;
}) => await http.patch(`todo/${type}/${id}`, { val });

export const editTodo = async ({ id, todo }: { id: string; todo: BaseTodo }) => await http.patch(`todo/${id}`, todo);

export const deleteTodo = async (id: string) => await http.delete(`todo/${id}`);

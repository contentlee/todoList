import { http } from "@lib/api";

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

export const getTodo = async (date: string, id: string): Promise<ResTodo> => {
  const data = await http.get(`todo/${date}/${id}`);
  return data.data;
};

export const getTodos = async (date: string): Promise<ResTodo[]> => {
  const data = await http.get(`todo/${date}`);
  return data.data;
};

export const createTodo = async (todo: ReqTodo) => {
  const res = await http.post("todo/add", todo);
  return res;
};

export const changeTodoState = async ({
  type,
  id,
  val,
}: {
  type: "todo" | "hold" | "complete";
  id: string;
  val: boolean;
}) => {
  const res = await http.patch(`todo/${type}/${id}`, { val });
  return res;
};

export const editTodo = async ({ id, todo }: { id: string; todo: BaseTodo }) => {
  const res = await http.patch(`todo/${id}`, todo);
  return res;
};

export const deleteTodo = async (id: string) => {
  const res = await http.delete(`todo/${id}`);
  return res;
};

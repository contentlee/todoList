import { Place } from "./place";

export type TodoState = "todo" | "hold" | "complete";

export interface BaseTodo {
  date: string;
  title: string;
  content: string;
  place: Place;
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

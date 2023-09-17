import { atom } from "recoil";
import { produce } from "immer";

export interface Todo {
  id: string;
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
  is_completed: boolean;
  is_held: boolean;
  write_date: string;
  edit_date: string;
}

export const typeAtom = atom<"todo" | "complete" | "hold">({
  key: "listTypeAtom",
  default: "todo",
});

export const deleteTodoAction = (id: string) => (prev: Todo[]) =>
  produce(prev, (draft) => {
    const index = draft.findIndex((item) => item.id === id);
    draft.splice(index, 1);
    return draft;
  });

export const changeTodoAction = (id: string, type: string, val: boolean) => (prev: Todo[]) =>
  produce(prev, (draft) => {
    const index = draft.findIndex((item) => item.id === id);
    if (type === "hold") draft[index].is_held = val;
    if (type === "complete") draft[index].is_completed = val;
    return draft;
  });

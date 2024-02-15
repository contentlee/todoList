import { ResTodo, TodoState } from "@utils/types/todo";
import { atom } from "recoil";

export const selectedTodoAtom = atom<ResTodo>({
  key: "selectedTodoAtom",
});

export const typeListAtom = atom<TodoState>({
  key: "listTypeAtom",
  default: "todo",
});

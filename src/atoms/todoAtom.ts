import { atom, selector } from "recoil";
import { produce } from "immer";
import { data } from "@utils/mock";

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
  isCompleted: boolean;
  isHeld: boolean;
  writeDate: string;
  editDate: string;
}

export const typeAtom = atom<"todo" | "complete" | "hold">({
  key: "listTypeAtom",
  default: "todo",
});
export const listAtom = atom<Todo[]>({
  key: "todoListAtom",
  default: data,
});

export const listSelector = selector({
  key: "listSelector",
  get: ({ get }) => {
    const type = get(typeAtom);
    if (type === "todo") {
      return get(listAtom)
        .filter(({ isCompleted }) => !isCompleted)
        .filter(({ isHeld }) => !isHeld);
    } else if (type === "complete") {
      return get(listAtom).filter(({ isCompleted }) => isCompleted);
    } else if (type === "hold") {
      return get(listAtom).filter(({ isHeld }) => isHeld);
    }

    return [];
  },
});

export const addTodo = (item: Todo) => (prev: Todo[]) =>
  produce(prev, (draft) => {
    draft.push(item);
    return draft;
  });

export const deleteTodo = (id: string) => (prev: Todo[]) =>
  produce(prev, (draft) => {
    const index = draft.findIndex((item) => item.id === id);
    draft.splice(index, 1);
    return draft;
  });

export const completeTodo = (id: string) => (prev: Todo[]) =>
  produce(prev, (draft) => {
    const index = draft.findIndex((item) => item.id === id);

    draft[index].isCompleted = !draft[index].isCompleted;
    draft[index].isHeld = false;
    return draft;
  });

export const holdTodo = (id: string) => (prev: Todo[]) =>
  produce(prev, (draft) => {
    const index = draft.findIndex((item) => item.id === id);
    draft[index].isCompleted = false;
    draft[index].isHeld = !draft[index].isHeld;
    return draft;
  });

export const returnTodo = (id: string) => (prev: Todo[]) =>
  produce(prev, (draft) => {
    const index = draft.findIndex((item) => item.id === id);
    draft[index].isCompleted = false;
    draft[index].isHeld = false;
    return draft;
  });

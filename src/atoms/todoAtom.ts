import { atom } from "recoil";

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

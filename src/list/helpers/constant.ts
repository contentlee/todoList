import { ResTodo, TodoState } from "@utils/types/todo";

export const TYPE_STR: TodoState[] = ["todo", "complete", "hold"];

export const DEFAULT_TODO: ResTodo = {
  id: "",
  write_date: "",
  edit_date: "",
  date: "",
  title: "",
  content: "",
  place: {
    marker: "",
    name: "",
    lat: 0,
    lng: 0,
  },
  category: "",
  is_completed: false,
  is_held: false,
};

export const CONSTANT_STR = {
  todo: {
    type: "todo",
    empty: "오늘 계획된 할 일이 존재하지 않습니다.",
    tab: "TO DO",
    title: "오늘 내가 해야할 일은",
  },
  complete: {
    type: "complete",
    empty: "오늘 완료된 일이 존재하지 않습니다.",
    tab: "COMPELTE",
    title: "오늘 내가 완료한 할 일은",
  },
  hold: {
    type: "hold",
    empty: "보류 중인 일이 존재하지 않습니다.",
    tab: "HOLD",
    title: "보류 중인 할일은",
  },
};

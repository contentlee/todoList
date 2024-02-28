import { ResTodo } from "@utils/types/todo";

export const mkTodoType = ({ is_completed, is_held }: ResTodo) => {
  if (is_completed) return "complete";
  if (is_held) return "hold";
  return "todo";
};

export const mkListByType = (todos: ResTodo[] = [], type = "todo") => {
  if (!todos) return [];
  if (type === "todo") {
    return todos.filter(({ is_completed }) => !is_completed).filter(({ is_held }) => !is_held);
  } else if (type === "complete") {
    return todos.filter(({ is_completed }) => is_completed);
  } else if (type === "hold") {
    return todos.filter(({ is_held }) => is_held);
  } else return [];
};

export const setArrayToPath = ([y, m, d]: number[]) => {
  const month = m < 10 ? `0${m}` : m;
  const date = d < 10 ? `0${d}` : d;
  return `${y}${month}${date} `;
};

export const setDateStringToPath = (date: string) => {
  return date.split("T")[0].split("-").join("");
};

import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";

import { http } from "@api/api";
import { alertAtom } from "@atoms/stateAtom";
import { ALERT_MSG } from "@utils/constant";

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

const getTodo = async (date: string, id: string): Promise<ResTodo> => await http.get(`todo/${date}/${id}`);
const getTodos = async (date: string): Promise<ResTodo[]> => await http.get(`todo/${date}`);
const createTodo = async (todo: ReqTodo) => await http.post("todo/add", todo);
const editTodo = async ({ id, todo }: { id: string; todo: BaseTodo }) => await http.patch(`todo/${id}`, todo);
const deleteTodo = async (id: string) => await http.delete(`todo/${id}`);
const changeTodoState = async ({ type, id, val }: { type: "todo" | "hold" | "complete"; id: string; val: boolean }) =>
  await http.patch(`todo/${type}/${id}`, { val });

export const useGetTodo = (date: string, id: string) => {
  return useQuery("todo", () => getTodo(date, id), {
    onError: () => {},
  });
};

export const useGetTodos = (date: string) => {
  return useQuery("todos", () => getTodos(date), {
    onError: () => {},
  });
};

export const useCreateTodo = (successAction = () => {}) => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(createTodo, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.add.success });
      client.invalidateQueries("category");
      successAction();
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.add.error });
    },
  });
};

export const useEditTodo = (successAction = () => {}) => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(editTodo, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.edit.success });
      client.invalidateQueries("todos");
      successAction();
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.edit.error });
    },
  });
};

export const useDeleteTodo = (successAction = () => {}) => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(deleteTodo, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.remove.success });
      client.invalidateQueries("todos");
      successAction();
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.remove.error });
    },
  });
};

export const useChangeTodoState = (successAction = () => {}) => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(changeTodoState, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.edit.success });
      client.invalidateQueries("todos");
      successAction();
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.edit.error });
    },
  });
};

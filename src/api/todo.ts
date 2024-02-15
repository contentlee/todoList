import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";

import { http } from "@api/api";
import { alertAtom } from "@atoms/alertAtom";
import { ALERT_MSG } from "@utils/constant";
import { BaseTodo, ReqTodo, ResTodo, TodoState } from "@utils/types/todo";

const getTodo = async (date: string, id: string): Promise<ResTodo> => await http.get(`todo/${date}/${id}`);
export const useGetTodo = (date: string, id: string) => {
  return useQuery("todo", () => getTodo(date, id), {
    onError: () => {},
  });
};

const getTodos = async (date: string): Promise<ResTodo[]> => await http.get(`todo/${date}`);
export const useGetTodos = (date: string) => {
  return useQuery("todos", () => getTodos(date), {
    onError: () => {},
  });
};

const createTodo = async (todo: ReqTodo) => await http.post("todo/add", todo);
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

const editTodo = async ({ id, todo }: { id: string; todo: BaseTodo }) => await http.patch(`todo/${id}`, todo);
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

const deleteTodo = async (id: string) => await http.delete(`todo/${id}`);
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

const changeTodoState = async ({ type, id, val }: { type: TodoState; id: string; val: boolean }) =>
  await http.patch(`todo/${type}/${id}`, { val });
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

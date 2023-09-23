import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";

import { http } from "./api";

import { alertAtom } from "@atoms/stateAtom";
import { ALERT_MSG } from "@utils/constant";

export interface ResCategory {
  id: string;
  name: string;
}

export interface ReqpCategory {
  category: string;
}

export interface ResCategories {
  email: string;
  category: ResCategory[];
}

const getCategories = async (): Promise<ResCategories> => await http.get("category/");
const registerCategory = async (category: ReqpCategory) => await http.post("category/add", category);
const deleteCategory = async (id: string) => await http.delete(`category/delete/${id}`);

export const useGetCategories = () => {
  return useQuery("category", () => getCategories(), {
    onError: () => {},
  });
};

export const useRegisterCategory = () => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(registerCategory, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.add.success });
      client.invalidateQueries("category");
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.add.error });
    },
  });
};

export const useDeleteCategory = () => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(deleteCategory, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.remove.success });
      client.invalidateQueries("category");
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.remove.error });
    },
  });
};

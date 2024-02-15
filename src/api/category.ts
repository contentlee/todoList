import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";

import { http } from "./api";

import { alertAtom } from "@atoms/alertAtom";
import { ALERT_MSG } from "@utils/constant";
import { Categories } from "@utils/types/category";

const getCategories = async (): Promise<Categories> => await http.get("category/");
export const useGetCategories = () => {
  return useQuery("category", () => getCategories(), {
    onError: () => {},
  });
};

export interface Request {
  category: string;
}
const registerCategory = async (category: Request) => await http.post("category/add", category);
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

const deleteCategory = async (id: string) => await http.delete(`category/delete/${id}`);
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

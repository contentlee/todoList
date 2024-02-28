import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";

import { http } from "./api";

import { alertAtom } from "@atoms/alertAtom";
import { ALERT_MSG } from "@utils/constant";
import { Places } from "@utils/types/place";

const getPlaces = async (): Promise<Places> => await http.get("place/");
export const useGetPlaces = () => {
  return useQuery("place", () => getPlaces(), {
    onError: () => {},
  });
};

interface Request {
  place: { name: string; marker: string; lat: number; lng: number };
}

const registerPlace = async (place: Request) => await http.post("place/add", place);
export const useRegisterPlace = () => {
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(registerPlace, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.add.success });
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.add.error });
    },
  });
};

const deletePlace = async (id: string) => await http.delete(`place/delete/${id}`);
export const useDeletePlace = () => {
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(deletePlace, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.remove.success });
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.remove.error });
    },
  });
};

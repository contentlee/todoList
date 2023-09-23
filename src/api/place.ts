import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";

import { http } from "./api";

import { alertAtom } from "@atoms/stateAtom";
import { ALERT_MSG } from "@utils/constant";

export interface ResPlace {
  id: string;
  name: string;
  marker: string;
  lat: number;
  lng: number;
}

export interface ReqpPlace {
  place: { name: string; marker: string; lat: number; lng: number };
}

export interface ResPlaces {
  email: string;
  places: ResPlace[];
}

const getPlaces = async (): Promise<ResPlaces> => await http.get("place/");
const registerPlace = async (place: ReqpPlace) => await http.post("place/add", place);
const deletePlace = async (id: string) => await http.delete(`place/delete/${id}`);

export const useGetPlaces = () => {
  return useQuery("place", () => getPlaces(), {
    onError: () => {},
  });
};

export const useRegisterPlace = () => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(registerPlace, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.add.success });
      client.invalidateQueries("category");
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.add.error });
    },
  });
};

export const useDeletePlace = () => {
  const client = useQueryClient();
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(deletePlace, {
    onSuccess: () => {
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.remove.success });
      client.invalidateQueries("category");
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.remove.error });
    },
  });
};

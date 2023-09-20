import { http } from "./api";

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

export const getPlaces = async (): Promise<ResPlaces> => await http.get("place/");
export const resisterPlace = async (place: ReqpPlace) => await http.post("place/add", place);
export const deletePlace = async (id: string) => await http.delete(`place/delete/${id}`);

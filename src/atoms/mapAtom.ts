import { atomFamily } from "recoil";
import { produce } from "immer";

export interface Position {
  lat: number;
  lng: number;
}

export interface Place extends Position {
  marker: string;
  name: string;
}

export const placeAtomFamily = atomFamily<Place, string>({
  key: "placeAtomFamily",
  default: (id) => ({
    id,
    marker: "",
    name: "",
    lat: 0,
    lng: 0,
  }),
});

export const setPlaceAction = (place: { lat: number; lng: number; name: string }) => (prev: Place) =>
  produce(prev, (draft) => {
    draft.name = place.name;
    draft.lat = place.lat;
    draft.lng = place.lng;
    return draft;
  });

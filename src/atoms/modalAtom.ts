import { produce } from "immer";
import { atom } from "recoil";

interface Modal {
  isOpened: boolean;
  type: "calendar" | "card" | "map";
}

export const modalAtom = atom<Modal>({
  key: "modalAtom",
  default: {
    isOpened: false,
    type: "calendar",
  },
});

export const toggleCalendarAction = (prev: Modal) =>
  produce(prev, (draft) => {
    (draft.type = "calendar"), (draft.isOpened = !draft.isOpened);
    return draft;
  });

export const toggleMapAction = (prev: Modal) =>
  produce(prev, (draft) => {
    (draft.type = "map"), (draft.isOpened = true);
    return draft;
  });

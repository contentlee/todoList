import { produce } from "immer";
import { atom } from "recoil";

interface Alert {
  isOpened: boolean;
  type: "success" | "error" | "warning" | "alarm";
  children: React.ReactNode;
}

export const alertAtom = atom<Alert>({
  key: "alertAtom",
  default: {
    isOpened: false,
    type: "success",
    children: "",
  },
});

export const closeAlertAction = (prev: Alert) =>
  produce(prev, (draft) => {
    draft.isOpened = false;
    return draft;
  });

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

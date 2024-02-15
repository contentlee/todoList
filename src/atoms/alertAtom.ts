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

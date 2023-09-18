import { atom } from "recoil";

interface User {
  is_logged_in: boolean;
  access_token: string;
  email: string;
  name: string;
}

export const userAtom = atom<User>({
  key: "userAtom",
  default: {
    is_logged_in: false,
    access_token: "",
    email: "",
    name: "",
  },
});

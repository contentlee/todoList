import { atomFamily } from "recoil";
import { makeDate } from "@utils/datepiacker";

const [year, month, day] = makeDate(new Date());

export const calendarAtomFamily = atomFamily<number[], string>({
  key: "calendarAtomFamily",
  default: [year, month, day],
});

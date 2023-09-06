import { atomFamily } from "recoil";
import { makeDate } from "@utils/datepiacker";

const [year, month, day] = makeDate(new Date());

export const calendarAtomFamily = atomFamily({
  key: "calendarAtomFamily",
  default: (id) => ({
    id,
    year: year,
    month: month,
    day: day,
  }),
});

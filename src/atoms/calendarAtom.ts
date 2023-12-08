import { atomFamily } from "recoil";
import { makeDate } from "@utils/datepiacker";

export interface Calendar {
  year: number;
  month: number;
  day: number;
}

const [year, month, day] = makeDate(new Date());

export const calendarAtomFamily = atomFamily<Calendar, string>({
  key: "calendarAtomFamily",
  default: (id) => ({
    id,
    year: year,
    month: month,
    day: day,
  }),
});

export const setCalendarAction =
  ({ year, month, day }: Calendar) =>
  () => {
    return { year, month, day };
  };

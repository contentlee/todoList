import { MouseEvent } from "react";

import { calculateMonth, makeMonthState } from "../helpers/calendar";

import { CalendarHead, CalendarBody, CalendarLayout } from "../common";

import MonthComponent from "./MonthComponent";

interface Props {
  view: number[];
  changeMonth: (v: number[]) => void;
  changeType: (t: "date" | "month") => void;
}

// Default Value
const MONTH_LIST = Array.from({ length: 12 }, (_, i) => i + 1);

const MonthCalendar = ({ view, changeMonth, changeType }: Props) => {
  const handleClickPrev = (e: MouseEvent) => {
    e.preventDefault();
    const value = calculateMonth(view, -12);
    changeMonth(value);
  };

  const handleClickNext = (e: MouseEvent) => {
    e.preventDefault();
    const value = calculateMonth(view, 12);
    changeMonth(value);
  };

  const selectMonth = (value: number[]) => {
    changeMonth(value);
    changeType("date");
  };

  return (
    <CalendarLayout>
      <CalendarHead>
        <CalendarHead.Arrow type="prev" handleClickArrow={handleClickPrev} />
        <CalendarHead.Title>{view[0]}</CalendarHead.Title>
        <CalendarHead.Arrow type="next" handleClickArrow={handleClickNext} />
      </CalendarHead>

      <CalendarBody>
        {MONTH_LIST.map((m, i) => {
          return (
            <MonthComponent
              key={i}
              value={[view[0], m]}
              state={makeMonthState([view[0], m], view)}
              selectMonth={selectMonth}
            />
          );
        })}
      </CalendarBody>
    </CalendarLayout>
  );
};

export default MonthCalendar;

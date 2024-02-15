import { MouseEvent, useEffect, useState } from "react";

import { calculateMonth, changeArrayToText, makeDateState, makeDateType, makeDates } from "../helpers/calendar";
import { DAY_OF_WEEK } from "../helpers/constant";

import { CalendarLayout } from "../layout";
import CalendarHead from "../head";
import CalendarBody from "../body";

import DayComponent from "./DayComponent";
import DateComponent from "./DateComponent";

interface Props {
  view: number[];
  selected?: number[];
  changeDate: (d: number[]) => void;
  changeMonth: (v: number[]) => void;
  changeType: (t: "date" | "month") => void;
}

const DateCalendar = ({ view, selected, changeDate, changeMonth, changeType }: Props) => {
  const [dates, setDates] = useState<number[][]>();

  const handleClickPrev = (e: MouseEvent) => {
    e.preventDefault();
    const value = calculateMonth(view, -1);
    changeMonth(value);
  };

  const handleClickNext = (e: MouseEvent) => {
    e.preventDefault();
    const value = calculateMonth(view, 1);
    changeMonth(value);
  };

  const handleClickTitle = (e: MouseEvent) => {
    e.preventDefault();
    changeType("month");
  };

  useEffect(() => {
    setDates(makeDates(view));
  }, [view]);

  return (
    <CalendarLayout>
      <CalendarHead>
        <CalendarHead.Arrow type="prev" handleClickArrow={handleClickPrev} />
        <CalendarHead.Title onClick={handleClickTitle}>{changeArrayToText([view[0], view[1]])}</CalendarHead.Title>
        <CalendarHead.Arrow type="next" handleClickArrow={handleClickNext} />
      </CalendarHead>
      <CalendarBody>
        {DAY_OF_WEEK.map((day) => {
          // 요일 리스트
          return <DayComponent key={day}>{day}</DayComponent>;
        })}

        {dates?.map((date) => {
          return (
            <DateComponent
              key={`${date[1]}${date[2]}`}
              date={date}
              type={makeDateType(date, view)}
              state={makeDateState(date, selected || [])}
              changeDate={changeDate}
            />
          );
        })}
      </CalendarBody>
    </CalendarLayout>
  );
};

export default DateCalendar;

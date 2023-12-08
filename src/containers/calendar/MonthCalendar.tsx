import { MouseEvent } from "react";

import { CalendarBody, CalendarHead, CalendarTitle, MonthComponent } from "@components/calendar";
import { Icon } from "@components/common";

import ArrowIcon from "@assets/arrow_icon.svg";

interface Props {
  year: number;
  month: number[];
  handleClickArrow: (e: MouseEvent, v: number) => void;
  handleClickMonth: (e: MouseEvent, selectedMonth: number) => void;
}

const MonthCalendar = ({ year, month, handleClickArrow, handleClickMonth }: Props) => {
  return (
    <>
      <CalendarHead>
        <Icon
          src={ArrowIcon}
          css={{
            transform: "rotate(180deg)",
          }}
          onClick={(e) => handleClickArrow(e, -12)}
        ></Icon>
        <CalendarTitle>{month[0]}</CalendarTitle>
        <Icon src={ArrowIcon} onClick={(e) => handleClickArrow(e, 12)}></Icon>
      </CalendarHead>

      <CalendarBody>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((m, i) => {
          const state = year === month[0] && m === month[1] ? "selected" : "non_selected";
          return (
            <MonthComponent key={i} state={state} onClick={(e) => handleClickMonth(e, m)}>
              {m}월
            </MonthComponent>
          );
        })}
      </CalendarBody>
    </>
  );
};

export default MonthCalendar;

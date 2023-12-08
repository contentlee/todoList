import { MouseEvent } from "react";

import ArrowIcon from "@assets/arrow_icon.svg";

import { Calendar } from "@atoms/calendarAtom";

import { CalendarBody, CalendarHead, CalendarTitle, DateComponent, DayComponent } from "@components/calendar";
import { Icon } from "@components/common";

import { makeDateList, makeDay, setArrayToText, setDateProps } from "@utils/datepiacker";

const DAY_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

interface Props {
  selected: Calendar;
  month: number[];
  handleClickTitle: (e: MouseEvent) => void;
  handleClickArrow: (e: MouseEvent, v: number) => void;
  handleClickDate: (e: MouseEvent, date: number) => void;
}

const DateCalendar = ({ selected, month, handleClickTitle, handleClickArrow, handleClickDate }: Props) => {
  // 캘린더를 통해 표기될 날짜들 리스트
  const dateList = makeDateList(month);
  // 현재 표시되는 달, 첫날의 요일
  const day = makeDay([...month, 1]);

  return (
    <>
      <CalendarHead>
        <Icon
          src={ArrowIcon}
          css={{
            transform: "rotate(180deg)",
          }}
          onClick={(e) => handleClickArrow(e, -1)}
        ></Icon>
        <CalendarTitle handleOnClick={handleClickTitle}>{setArrayToText(month)}</CalendarTitle>
        <Icon src={ArrowIcon} onClick={(e) => handleClickArrow(e, 1)}></Icon>
      </CalendarHead>
      <CalendarBody>
        {DAY_OF_WEEK.map((day) => {
          return <DayComponent key={day}>{day}</DayComponent>;
        })}

        {dateList.map((dates, i) => {
          return dates.map((date) => {
            // 현재 설정된 달 표기의 경우
            if (i === 1) {
              const [state, type] = setDateProps([...month, date], day, [selected.year, selected.month, selected.day]);
              return (
                <DateComponent
                  key={`${month[1]}${date}`}
                  state={state}
                  type={type}
                  onClick={(e) => handleClickDate(e, date)}
                >
                  {date}
                </DateComponent>
              );
            }

            // 이전달 혹은 다음달 표기의 경우
            return (
              <DateComponent key={date} type="etc">
                {date}
              </DateComponent>
            );
          });
        })}
      </CalendarBody>
    </>
  );
};

export default DateCalendar;

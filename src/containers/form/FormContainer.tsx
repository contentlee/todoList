import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createPortal } from "react-dom";
import { useRecoilState, useResetRecoilState } from "recoil";

import NavIcon from "@assets/share_location_icon.svg";
import CalendarIcon from "@assets/calendar_icon.svg";

import { Todo } from "@atoms/todoAtom";
import { calendarAtomFamily, setCalendarAction } from "@atoms/calendarAtom";
import { modalAtom, toggleCalendarAction, toggleMapAction } from "@atoms/stateAtom";
import { placeAtomFamily, setPlaceAction } from "@atoms/mapAtom";

import { setArrayToText, setDateToArray } from "@utils/datepiacker";

import { Calendar } from "@containers/calendar";
import { MapFormContaienr } from "@containers/maps";

import { Button, Form, Icon, Input, TextArea } from "@components/common";
import { CategorySelect } from "@containers/category";

interface Props {
  todo?: Todo;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormContainer = ({ todo, handleSubmit }: Props) => {
  const navigate = useNavigate();

  const [{ isOpened, type }, setModal] = useRecoilState(modalAtom);

  const [item, setItem] = useState<Todo>();

  const [{ year, month, day }, setDate] = useRecoilState(calendarAtomFamily("form"));

  const handleToggleCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal(toggleCalendarAction);
  };

  const [place, setPlace] = useRecoilState(placeAtomFamily("form"));
  const resetPlace = useResetRecoilState(placeAtomFamily("form"));

  const handleToggleMap = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal(toggleMapAction);
  };

  const handleClickReturn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    if (todo) {
      const [year, month, day] = setDateToArray(todo.date);
      setDate(setCalendarAction({ year, month, day }));
      setPlace(setPlaceAction(todo.place));
      setItem(todo);
    } else {
      resetPlace();
    }
  }, [todo]);

  return (
    <Form onSubmit={handleSubmit} onReset={handleClickReturn}>
      <Input label="제목" defaultValue={item?.title}></Input>
      <Input label="날짜" value={setArrayToText([year, month, day])} readOnly handleOnClick={handleToggleCalendar}>
        <Icon src={CalendarIcon}></Icon>
      </Input>
      {isOpened && type === "calendar" && createPortal(<Calendar id="form"></Calendar>, document.body, "calendar")}

      <Input value={place.name} label="장소" readOnly handleOnClick={handleToggleMap}>
        <Icon src={NavIcon}></Icon>
      </Input>
      {isOpened &&
        type === "map" &&
        createPortal(<MapFormContaienr id="form" value={place}></MapFormContaienr>, document.body, "map-form")}

      <CategorySelect value={item?.category}></CategorySelect>
      <TextArea label="내용" defaultValue={item?.content}></TextArea>
      <div
        css={{
          display: "flex",
          justifyContent: "end",
          marginTop: "10px",
          gap: "10px",
        }}
      >
        <Button variant="secondary" type="reset">
          돌아가기
        </Button>
        <Button type="submit">제출</Button>
      </div>
    </Form>
  );
};

export default FormContainer;

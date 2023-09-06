import { useState } from "react";

import NavIcon from "@assets/share_location_icon.svg";
import CalendarIcon from "@assets/calendar_icon.svg";

import { Button, Form, Icon, Input, Select, TextArea } from "@components/common";
import { CATEGORY } from "@utils/constant";
import { DatePicker } from "@containers/calendar";
import { Todo } from "@atoms/todoAtom";

interface Props {
  todo?: Todo;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClickReturn: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormContainer = ({ todo, handleSubmit, handleClickReturn }: Props) => {
  const [category, setCategory] = useState(todo?.category ? todo.category : "");

  const handleClickOption = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    setCategory(item);
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleClickReturn}>
      <Input label="제목" defaultValue={todo?.title}></Input>
      <Input
        label="날짜"
        css={{
          display: "none",
          flex: 1,
        }}
      >
        <div
          css={{
            flex: 1,
            display: "flex",
          }}
        >
          <DatePicker
            id="form"
            css={{
              flex: 1,
              textAlign: "left",
              fontSize: "12px",
              fontWeight: 400,
            }}
          ></DatePicker>
          <Icon src={CalendarIcon}></Icon>
        </div>
      </Input>
      <Input label="장소" defaultValue={todo?.place.name}>
        <Icon src={NavIcon}></Icon>
      </Input>
      <Select label="분류" value={category} option={CATEGORY} handleClickOption={handleClickOption}></Select>
      <TextArea label="내용" defaultValue={todo?.content}></TextArea>
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

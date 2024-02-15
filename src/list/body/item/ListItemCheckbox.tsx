import { FormEvent } from "react";

import { useChangeTodoState } from "@api/todo";

import { Checkbox } from "@components";

interface Props {
  id: string;
  type: "todo" | "hold" | "complete";
}

const ListItemCheckbox = ({ id, type }: Props) => {
  const { mutate } = useChangeTodoState();

  const handleChangeCheckbox = (e: FormEvent) => {
    e.preventDefault();
    mutate({ id, type: "complete", val: type !== "complete" });
  };

  return <Checkbox id={id} defaultChecked={type === "complete"} onChange={handleChangeCheckbox}></Checkbox>;
};

export default ListItemCheckbox;

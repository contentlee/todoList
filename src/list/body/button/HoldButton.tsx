import { MouseEvent } from "react";

import { useChangeTodoState } from "@api/todo";

import HoldIcon from "@assets/hold_icon.svg";

import { Icon } from "@components";

interface Props {
  id: string;
}

const HoldButton = ({ id }: Props) => {
  const { mutate } = useChangeTodoState();

  const handleClickHold = (e: MouseEvent) => {
    e.preventDefault();
    mutate({ id, type: "hold", val: true });
  };
  return <Icon src={HoldIcon} alt="hold" onClick={handleClickHold} />;
};

export default HoldButton;

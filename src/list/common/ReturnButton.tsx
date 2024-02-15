import { MouseEvent } from "react";
import { useResetRecoilState } from "recoil";

import { useChangeTodoState } from "@api/todo";

import { modalAtom } from "@atoms/modalAtom";

import HoldIcon from "@assets/hold_icon.svg";
import { Icon } from "@components";

interface Props {
  id: string;
}

const ReturnButton = ({ id }: Props) => {
  const resetModal = useResetRecoilState(modalAtom);

  const { mutate } = useChangeTodoState(resetModal);

  const handleClickHold = (e: MouseEvent) => {
    e.preventDefault();
    mutate({ id, type: "hold", val: false });
    resetModal();
  };
  return <Icon src={HoldIcon} alt="hold" onClick={handleClickHold} />;
};

export default ReturnButton;

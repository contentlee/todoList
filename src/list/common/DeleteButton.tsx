import { MouseEvent } from "react";
import { useResetRecoilState } from "recoil";

import { useDeleteTodo } from "@api/todo";

import { modalAtom } from "@atoms/modalAtom";

import DeleteIcon from "@assets/delete_icon.svg";
import { Icon } from "@components";

interface Props {
  id: string;
}

const DeleteButton = ({ id }: Props) => {
  const resetModal = useResetRecoilState(modalAtom);
  const { mutate } = useDeleteTodo(resetModal);

  const handleClickDelete = (e: MouseEvent) => {
    e.preventDefault();
    mutate(id);
  };

  return <Icon src={DeleteIcon} alt="delete" onClick={handleClickDelete} />;
};

export default DeleteButton;

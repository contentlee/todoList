import { MouseEvent } from "react";

import DeleteIcon from "@assets/delete_icon.svg";

import { useDeleteTodo } from "@api/todo";

import { Icon } from "@components";

interface Props {
  id: string;
}

const DeleteButton = ({ id }: Props) => {
  const { mutate } = useDeleteTodo();

  const handleClickDelete = (e: MouseEvent) => {
    e.preventDefault();
    mutate(id);
  };

  return <Icon src={DeleteIcon} alt="delete" onClick={handleClickDelete} />;
};

export default DeleteButton;

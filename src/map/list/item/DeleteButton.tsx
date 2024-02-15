import { MouseEvent } from "react";

import { useDeletePlace } from "@api/place";

import DeleteIcon from "@assets/delete_icon.svg";
import { Icon } from "@components";

interface Props {
  id: string;
}
const DeleteButton = ({ id }: Props) => {
  const { mutate } = useDeletePlace();
  const handleClickDelete = (e: MouseEvent) => {
    e.preventDefault();
    mutate(id);
  };

  return <Icon src={DeleteIcon} alt="delete" onClick={handleClickDelete} />;
};

export default DeleteButton;

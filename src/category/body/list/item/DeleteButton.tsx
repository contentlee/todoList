import { Icon } from "@components";
import DeleteIcon from "@assets/delete_icon.svg";
import { HTMLAttributes } from "react";
import { useDeleteCategory } from "@api/category";

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

const DeleteButton = ({ id, ...props }: Props) => {
  const { mutate } = useDeleteCategory();
  const handleClickDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    mutate(id);
  };

  return (
    <div css={{ display: "flex", gap: "8px" }} {...props}>
      <Icon src={DeleteIcon} alt="delete" onClick={handleClickDelete} />
    </div>
  );
};

export default DeleteButton;

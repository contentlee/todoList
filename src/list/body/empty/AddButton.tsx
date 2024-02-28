import { HTMLAttributes, MouseEvent } from "react";
import { useNavigate } from "react-router";

import AddIcon from "@assets/add_circle_icon.svg";

import { Icon } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AddButton = ({ ...props }: Props) => {
  const navigate = useNavigate();

  const handleClickAdd = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/add");
  };
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        opacity: "10%",
        transition: ".2s",
        "&:hover": {
          opacity: "40%",
        },
      }}
      onClick={handleClickAdd}
      {...props}
    >
      <Icon src={AddIcon} size="large" alt="add"></Icon>
    </div>
  );
};

export default AddButton;

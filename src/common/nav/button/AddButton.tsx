import { MouseEvent } from "react";

import AddIcon from "@assets/add_circle_icon.svg";
import { Icon } from "@/common/components";

interface Props {
  changePath: (path: string) => void;
}
const AddButton = ({ changePath }: Props) => {
  const handleClickIcon = (e: MouseEvent) => {
    e.preventDefault();
    changePath("add");
  };
  return <Icon src={AddIcon} size="add" alt="add" onClick={handleClickIcon} css={{ marginBottom: "16px" }}></Icon>;
};

export default AddButton;

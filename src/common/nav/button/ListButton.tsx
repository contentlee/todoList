import { MouseEvent } from "react";

import ListIcon from "@assets/list_icon.svg";
import { Icon } from "@/common/components";

interface Props {
  changePath: (path: string) => void;
}
const ListButton = ({ changePath }: Props) => {
  const handleClickIcon = (e: MouseEvent) => {
    e.preventDefault();
    changePath("/");
  };

  return <Icon src={ListIcon} size="medium" alt="list" onClick={handleClickIcon} />;
};

export default ListButton;

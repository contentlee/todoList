import { MouseEvent } from "react";

import AlramIcon from "@assets/notifications_icon.svg";
import { Icon } from "@/common/components";

interface Props {
  changePath: (path: string) => void;
}

const AlarmIcon = ({ changePath }: Props) => {
  const handleClickIcon = (e: MouseEvent) => {
    e.preventDefault();
    changePath("add");
  };
  return (
    <Icon src={AlramIcon} size="medium" alt="alarm" onClick={handleClickIcon} css={{ position: "relative" }}></Icon>
  );
};

export default AlarmIcon;

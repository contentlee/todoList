import { Icon } from "@/common/components";
import ProfileIcon from "@assets/account_icon.svg";
import { MouseEvent } from "react";

interface Props {
  changePath: (path: string) => void;
}

const UserButton = ({ changePath }: Props) => {
  const handleClickIcon = (e: MouseEvent) => {
    e.preventDefault();
    changePath("mypage");
  };
  return <Icon src={ProfileIcon} size="medium" alt="mypage" onClick={handleClickIcon}></Icon>;
};

export default UserButton;

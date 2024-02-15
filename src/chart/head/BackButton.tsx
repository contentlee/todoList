import { useNavigate } from "react-router";

import ReturnIcon from "@assets/redo_icon.svg";

import { Icon } from "@components";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate(-1);
  };
  return <Icon src={ReturnIcon} onClick={handleClickReturn}></Icon>;
};

export default BackButton;

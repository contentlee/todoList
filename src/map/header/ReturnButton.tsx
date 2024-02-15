import ReturnIcon from "@assets/redo_icon.svg";

import { Icon } from "@components";
import { useNavigate } from "react-router";

const ReturnButton = () => {
  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate(-1);
  };
  return <Icon src={ReturnIcon} onClick={handleClickReturn}></Icon>;
};

export default ReturnButton;

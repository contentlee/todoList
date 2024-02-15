import { Icon } from "@components";
import ReturnIcon from "@assets/redo_icon.svg";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  const handleClickReturn = () => {
    navigate(-1);
  };
  return <Icon src={ReturnIcon} onClick={handleClickReturn}></Icon>;
};

export default BackButton;

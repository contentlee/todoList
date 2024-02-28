import { useRecoilState } from "recoil";

import { alertAtom, closeAlertAction } from "@atoms/alertAtom";

import CloseIcon from "@assets/close_icon.svg";
import { Icon } from "@components";

const CloseButton = () => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const handleClickClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setAlert(closeAlertAction);
  };

  return (
    <div
      css={{
        position: "absolute",
        right: "14px",
      }}
    >
      <Icon src={CloseIcon} onClick={handleClickClose}></Icon>
    </div>
  );
};

export default CloseButton;

import { MouseEvent } from "react";

import { Icon } from "@components";
import ArrowIcon from "@assets/arrow_icon.svg";

interface Props {
  type: "prev" | "next";
  handleClickArrow: (e: MouseEvent) => void;
}

const ArrowButton = ({ type, handleClickArrow }: Props) => {
  const rotate = type === "prev" ? 180 : 0;
  return (
    <Icon
      src={ArrowIcon}
      css={{
        transform: `rotate(${rotate}deg)`,
      }}
      onClick={handleClickArrow}
    />
  );
};

export default ArrowButton;

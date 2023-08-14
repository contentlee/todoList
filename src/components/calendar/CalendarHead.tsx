import { Icon } from "..";

import ArrowIcon from "../../assets/arrow_icon.svg";

interface Props {
  handleClickArrowL?: (e: React.MouseEvent) => void;
  handleClickArrowR?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const CalendarHead = ({ handleClickArrowL, handleClickArrowR, children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Icon
        src={ArrowIcon}
        css={{
          transform: "rotate(180deg)",
        }}
        onClick={handleClickArrowL}
      ></Icon>
      {children}
      <Icon src={ArrowIcon} onClick={handleClickArrowR}></Icon>
    </div>
  );
};

export default CalendarHead;

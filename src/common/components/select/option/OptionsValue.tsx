import { MouseEvent } from "react";

import ArrowIcon from "@assets/expand_more_icon.svg";
import Icon from "../../Icon";

import { palette } from "@utils/palette";

interface Props {
  value: string;
  toggleOptionsOpened: () => void;
}

const OptionsValue = ({ value, toggleOptionsOpened }: Props) => {
  const handleClickOptions = (e: MouseEvent) => {
    e.preventDefault();
    toggleOptionsOpened();
  };
  return (
    <div
      css={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        fontSize: "12px",
        color: palette.gray600,
      }}
      onClick={handleClickOptions}
    >
      <div
        css={{
          flex: 1,
        }}
      >
        {value}
      </div>
      <Icon src={ArrowIcon} alt="arrow"></Icon>
    </div>
  );
};

export default OptionsValue;

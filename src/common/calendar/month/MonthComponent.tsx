import { MouseEvent } from "react";
import { palette } from "@utils/palette";

interface Props {
  state: "current" | "non_selected" | "selected";
  value: number[];
  selectMonth: (v: number[]) => void;
}

const MonthComponent = ({ state, value, selectMonth }: Props) => {
  const handleClickMonth = (e: MouseEvent) => {
    e.preventDefault();
    selectMonth(value);
  };
  return (
    <div
      onClick={handleClickMonth}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70px",
        height: "48px",

        fontSize: "14px",
        fontWeight: 400,

        transition: ".1s",
        cursor: "pointer",

        "&:hover": {
          color: palette.white,
          backgroundColor: palette.blue,
        },

        ...STATE_VARIANTS[state],
      }}
    >
      {value[1]}월
    </div>
  );
};

const STATE_VARIANTS = {
  non_selected: {
    color: palette.gray500,
    backgroundColor: palette.white,
  },
  selected: {
    color: palette.white,
    backgroundColor: palette.blue,
  },
  current: {
    color: palette.white,
    backgroundColor: palette.yellow,
  },
};

export default MonthComponent;

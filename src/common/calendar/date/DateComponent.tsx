import { MouseEvent } from "react";
import { palette } from "@utils/palette";

interface Props {
  date: number[];
  size?: "small" | "medium";
  type: "sat" | "sun" | "etc" | "basic";
  state: "basic" | "selected" | "today";
  changeDate: (d: number[]) => void;
}

const DateComponent = ({ date, size = "medium", type, state, changeDate }: Props) => {
  const handleClickDate = (e: MouseEvent) => {
    e.preventDefault();
    changeDate(date);
  };

  return (
    <div
      onClick={handleClickDate}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        fontSize: "14px",
        cursor: "pointer",
        "&:hover": {
          color: palette.white,
          backgroundColor: palette.blue,
        },

        ...SIZE_VARIANTS[size],
        ...TYPE_VARIANTS[type],
        ...STATE_VARIANTS[state],
      }}
    >
      {date[2]}
    </div>
  );
};

const SIZE_VARIANTS = {
  small: {},
  medium: {
    width: "40px",
    height: "40px",
  },
};

const TYPE_VARIANTS = {
  basic: {
    color: palette.gray500,
  },
  sat: {
    color: palette.blue,
  },
  sun: {
    color: palette.red,
  },
  etc: {
    color: palette.gray500,
    opacity: "50%",
    "&:hover": {
      color: palette.white,
      backgroundColor: palette.gray500,
    },
  },
};

const STATE_VARIANTS = {
  basic: {
    backgroundColor: palette.white,
  },
  selected: {
    color: palette.white,
    backgroundColor: palette.blue,
  },
  today: {
    color: palette.white,
    backgroundColor: palette.yellow,
  },
};

export default DateComponent;

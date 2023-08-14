import { HTMLAttributes } from "react";
import { palette } from "../../utils/palette";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: "small" | "medium";
  type?: "sat" | "sun" | "etc" | "basic";
  state?: "basic" | "selected" | "today";
}

const DateComponent = ({ children, size = "medium", type = "basic", state = "basic", ...props }: Props) => {
  return (
    <div
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
      {...props}
    >
      {children}
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
    cursor: "default",
    "&:hover": {
      color: palette.gray500,
      backgroundColor: palette.white,
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

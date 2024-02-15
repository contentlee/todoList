import { HTMLAttributes } from "react";
import { setArrayToText } from "@utils/datepiacker";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  date?: number[];
  size: "small" | "regular" | "large";
}

const DateInputComponent = ({ date, children, size, ...props }: Props) => {
  return (
    <input
      readOnly
      type="text"
      value={date ? setArrayToText(date) : ""}
      onChange={() => {}}
      css={{
        flex: 1,
        outline: "none",
        border: "none",

        width: "100%",

        textAlign: "center",

        color: palette.gray400,

        fontWeight: 700,

        cursor: "pointer",
        userSelect: "none",

        boxSizing: "border-box",

        ...SIZE_VARIANTS[size],
      }}
      {...props}
    />
  );
};

const SIZE_VARIANTS = {
  small: {
    fontSize: "14px",
  },
  regular: {
    fontSize: "18px",
  },
  large: {
    fontSize: "24px",
  },
};

export default DateInputComponent;

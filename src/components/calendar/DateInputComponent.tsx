import { HTMLAttributes } from "react";
import { setDateToString } from "../../utils/datepiacker";
import { palette } from "../../utils/palette";

interface Props extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  date?: number[];
}

const DateInputComponent = ({ date, children, ...props }: Props) => {
  return (
    <input
      readOnly
      type="text"
      value={date ? setDateToString(date) : ""}
      css={{
        outline: "none",
        border: "none",

        textAlign: "center",

        color: palette.gray400,

        fontSize: "14px",
        fontWeight: 700,

        cursor: "pointer",
        userSelect: "none",
      }}
      {...props}
    ></input>
  );
};

export default DateInputComponent;

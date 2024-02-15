import { palette } from "@utils/palette";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const CalendarTitle = ({ children, ...props }: Props) => {
  return (
    <span
      css={{
        fontSize: "16px",
        fontWeight: 700,
        color: palette.gray400,

        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default CalendarTitle;

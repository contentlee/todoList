import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DatePickerLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        zIndex: "10",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default DatePickerLayout;

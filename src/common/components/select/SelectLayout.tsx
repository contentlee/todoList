import { palette } from "@utils/palette";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SelectLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "350px",
        height: "40px",
        padding: "0 16px",
        gap: "16px",
        boxSizing: "border-box",
        border: "1px solid",
        backgroundColor: palette.white,
      }}
    >
      {children}
    </div>
  );
};

export default SelectLayout;

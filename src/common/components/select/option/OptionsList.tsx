import { palette } from "@utils/palette";
import { ReactNode } from "react";

interface Props {
  isOpened: boolean;
  children: ReactNode;
}
const OptionsList = ({ isOpened, children }: Props) => {
  if (!isOpened) return <></>;
  return (
    <div
      css={{
        zIndex: "100",
        position: "absolute",
        top: "100%",
        width: "100%",
        maxHeight: "200px",
        margin: "4px 0",
        fontSize: "12px",
        color: palette.gray600,
        background: "#fff",
        border: "1px solid",
        borderColor: palette.gray200,
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default OptionsList;

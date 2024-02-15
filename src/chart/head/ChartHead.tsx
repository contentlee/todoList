import { ReactNode } from "react";
import ChartTitle from "./ChartTitle";
import BackButton from "./BackButton";

interface Props {
  children: ReactNode;
}

const ChartHead = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

ChartHead.Title = ChartTitle;
ChartHead.Back = BackButton;

export default ChartHead;

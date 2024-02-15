import { ReactNode } from "react";

import ChartContentBar from "./ChartContentBar";
import ChartContentText from "./ChartContentText";

interface Props {
  children: ReactNode;
}

const ChartBody = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "8px",
        paddingBottom: "24px",
        gap: "10px",
        WebkitScrollSnapType: "y",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "100%",
          margin: "8px 0",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

ChartBody.Bar = ChartContentBar;
ChartBody.Text = ChartContentText;

export default ChartBody;

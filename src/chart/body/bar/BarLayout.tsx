import { ReactNode } from "react";

import { palette } from "@utils/palette";

interface Props {
  children: ReactNode;
}
const BarChartLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        border: `1px solid ${palette.gray600}`,
        gap: "8px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default BarChartLayout;

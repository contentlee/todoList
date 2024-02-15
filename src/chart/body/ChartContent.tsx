import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ChartContent = ({ children }: Props) => {
  return (
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
  );
};

export default ChartContent;

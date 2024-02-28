import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ChartHeadLayout = ({ children }: Props) => {
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

export default ChartHeadLayout;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ChartBodyLayout = ({ children }: Props) => {
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

export default ChartBodyLayout;

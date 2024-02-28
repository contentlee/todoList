import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoadingLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        zIndex: "1100",
        position: "absolute",
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        height: "100%",
        padding: "24px 0",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default LoadingLayout;

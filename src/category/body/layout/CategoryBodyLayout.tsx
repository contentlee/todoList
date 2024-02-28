import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CategoryBodyLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "100%",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default CategoryBodyLayout;

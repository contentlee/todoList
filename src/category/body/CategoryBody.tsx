import { ReactNode } from "react";

import CategoryRegister from "../register";
import CategoryList from "../list";

interface Props {
  children: ReactNode;
}

const CategoryBody = ({ children }: Props) => {
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

CategoryBody.Register = CategoryRegister;
CategoryBody.List = CategoryList;

export default CategoryBody;

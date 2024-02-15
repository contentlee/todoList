import { ReactNode } from "react";
import CategoryTitle from "./CategoryTitle";
import BackButton from "./BackButton";

interface Props {
  children: ReactNode;
}

const CategoryHead = ({ children }: Props) => {
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

CategoryHead.Title = CategoryTitle;
CategoryHead.Back = BackButton;

export default CategoryHead;

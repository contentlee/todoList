import { palette } from "@utils/palette";
import { ReactNode } from "react";
import CategoryItemTitle from "./CategoryItemTitle";
import DeleteButton from "./DeleteButton";

interface Props {
  children?: ReactNode;
}

const CategoryItem = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        width: "100%",
        maxWidth: "350px",
        minHeight: "40px",
        gap: "32px",
        boxSizing: "border-box",
        border: "1px solid",
        backgroundColor: palette.white,
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

CategoryItem.Title = CategoryItemTitle;
CategoryItem.Delete = DeleteButton;

export default CategoryItem;

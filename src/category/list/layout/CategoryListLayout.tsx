import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CategoryListLayout = ({ children }: Props) => {
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
      {children}
    </div>
  );
};

export default CategoryListLayout;

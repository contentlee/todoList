import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CategoryHeadLayout = ({ children }: Props) => {
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

export default CategoryHeadLayout;

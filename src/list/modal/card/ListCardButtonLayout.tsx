import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListCardButtonLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "absolute",
        top: 0,
        right: 0,

        display: "flex",
        alignItems: "center",

        height: "36px",
        padding: "0 16px",

        gap: "8px",

        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

export default ListCardButtonLayout;

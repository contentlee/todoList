import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ButtonLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "8px 20px",
        width: "100%",
        minWidth: "280px",
        maxWidth: "320px",
      }}
    >
      {children}
    </div>
  );
};

export default ButtonLayout;

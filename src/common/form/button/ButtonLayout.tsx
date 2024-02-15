import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "end",
        marginTop: "10px",
        gap: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default ButtonLayout;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BarContent = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        height: "30px",
      }}
    >
      {children}
    </div>
  );
};

export default BarContent;

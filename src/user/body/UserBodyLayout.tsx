import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserBodyLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "16px",
      }}
    >
      {children}
    </div>
  );
};

export default UserBodyLayout;

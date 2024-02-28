import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserHeadLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: "10px",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default UserHeadLayout;

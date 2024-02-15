import { ReactNode } from "react";

import Greeting from "./Greeting";
import UserEmail from "./UserEmail";
import UserName from "./UserName";

interface Props {
  children: ReactNode;
}

const UserHead = ({ children }: Props) => {
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

UserHead.Greeting = Greeting;
UserHead.UserEmail = UserEmail;
UserHead.UserName = UserName;

export default UserHead;

import { ReactNode } from "react";
import UserInfo from "./UserInfo";
import UserSetting from "./UserSetting";
import UserAccount from "./UserAccount";

interface Props {
  children: ReactNode;
}

const UserBody = ({ children }: Props) => {
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

UserBody.UserInfo = UserInfo;
UserBody.UserSetting = UserSetting;
UserBody.UserAccount = UserAccount;

export default UserBody;

import UserInfo from "./UserInfo";
import UserSetting from "./UserSetting";
import UserAccount from "./UserAccount";
import UserBodyLayout from "./UserBodyLayout";

const UserBody = () => {
  return (
    <UserBodyLayout>
      <UserInfo />
      <UserSetting />
      <UserAccount />
    </UserBodyLayout>
  );
};

export default UserBody;

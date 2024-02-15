import { useRecoilValue } from "recoil";
import { userAtom } from "@atoms/userAtom";

import { PageLayout } from "@components";
import UserBody from "./body";
import UserHead from "./head";

const UserPage = () => {
  const { email, name } = useRecoilValue(userAtom);

  return (
    <PageLayout css={{ gap: "16px" }}>
      <UserHead>
        <UserHead.Greeting />
        <UserHead.UserName name={name} />
        <UserHead.UserEmail email={email} />
      </UserHead>

      <UserBody>
        <UserBody.UserInfo />
        <UserBody.UserSetting />
        <UserBody.UserAccount />
      </UserBody>
    </PageLayout>
  );
};

export default UserPage;

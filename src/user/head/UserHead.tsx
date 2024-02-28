import UserHeadLayout from "./layout";
import { Greeting, UserEmail, UserName } from "./contents";

const UserHead = () => {
  return (
    <UserHeadLayout>
      <Greeting />
      <UserName name={""} />
      <UserEmail email={""} />
    </UserHeadLayout>
  );
};

export default UserHead;

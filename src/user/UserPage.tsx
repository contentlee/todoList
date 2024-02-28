import { PageLayout } from "@components";
import UserBody from "./body";
import UserHead from "./head";

const UserPage = () => {
  return (
    <PageLayout css={{ gap: "16px" }}>
      <UserHead />
      <UserBody />
    </PageLayout>
  );
};

export default UserPage;

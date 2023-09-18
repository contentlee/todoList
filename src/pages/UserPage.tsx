import { UserBodyContainer, UserHeadContainer } from "@containers/user";

import { PageLayout } from "@components/common";

const UserPage = () => {
  return (
    <PageLayout css={{ gap: "16px" }}>
      <UserHeadContainer></UserHeadContainer>
      <UserBodyContainer></UserBodyContainer>
    </PageLayout>
  );
};

export default UserPage;

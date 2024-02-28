import CategoryHead from "./head";
import CategoryBody from "./body";
import { PageLayout } from "@components";

const UserCategoryPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <CategoryHead />
      <CategoryBody />
    </PageLayout>
  );
};

export default UserCategoryPage;

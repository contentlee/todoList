import { PageLayout } from "@components/common";
import { CategoryList, CategoryrHead } from "@containers/category";

const UserCategoryPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <CategoryrHead></CategoryrHead>
      <CategoryList></CategoryList>
    </PageLayout>
  );
};

export default UserCategoryPage;

import { PageLayout, SubText, Title } from "@components/common";
import { CategoryList } from "@containers/category";

const UserCategoryPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <Title>
        카테고리 설정 <SubText>등록된 카테고리를 관리합니다.</SubText>
      </Title>
      <CategoryList></CategoryList>
    </PageLayout>
  );
};

export default UserCategoryPage;

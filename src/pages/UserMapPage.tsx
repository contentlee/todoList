import { PageLayout, SubText, Title } from "@components/common";
import { MapUserContainer } from "@containers/maps";

const UserMapPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <Title>
        나의 장소 설정 <SubText>등록된 장소를 관리합니다.</SubText>
      </Title>

      <MapUserContainer id="user"></MapUserContainer>
    </PageLayout>
  );
};

export default UserMapPage;

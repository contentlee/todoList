import { PageLayout } from "@components/common";
import { MapUserContainer, MapUserHead } from "@containers/maps";

const UserMapPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <MapUserHead></MapUserHead>
      <MapUserContainer id="user"></MapUserContainer>
    </PageLayout>
  );
};

export default UserMapPage;

import { Outlet } from "react-router-dom";

import { PageLayout } from "@components/common";
import { ErrorContainer, NavContainer } from "@containers/common";

const MainPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <Outlet />
      <NavContainer></NavContainer>
    </PageLayout>
  );
};

export default MainPage;

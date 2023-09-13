import { LoadingContainer } from "@containers/common";
import AlertContainer from "@containers/common/AlertContainer";

import { Outlet } from "react-router";

const CommonPage = () => {
  return (
    <>
      <AlertContainer></AlertContainer>
      <LoadingContainer></LoadingContainer>
      <Outlet></Outlet>
    </>
  );
};

export default CommonPage;

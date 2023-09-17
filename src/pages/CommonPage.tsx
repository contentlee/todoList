import { Outlet, useLocation } from "react-router";

import { AlertContainer, LoadingContainer, NavContainer } from "@containers/common";

import { Overlay } from "@components/common";

const CommonPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Overlay></Overlay>
      <AlertContainer></AlertContainer>
      <LoadingContainer></LoadingContainer>
      {pathname !== "login" && <NavContainer></NavContainer>}

      <Outlet></Outlet>
    </>
  );
};

export default CommonPage;

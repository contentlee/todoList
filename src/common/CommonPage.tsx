import { Outlet } from "react-router";

import Navigation from "./nav";
import Alert from "./alert";

const CommonPage = () => {
  return (
    <div css={{ width: "100%", maxWidth: "390px", height: "100%" }}>
      <Alert />
      <Outlet />
      <Navigation />
    </div>
  );
};

export default CommonPage;

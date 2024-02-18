import { useEffect } from "react";

import { useRefresh } from "@api/user";

import { PageLayout } from "@components";
import OAuthContainer from "./oauth";

const LoginPage = () => {
  const { mutate } = useRefresh();

  useEffect(() => {
    mutate();
  }, []);
  return (
    <PageLayout
      css={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OAuthContainer />
    </PageLayout>
  );
};

export default LoginPage;

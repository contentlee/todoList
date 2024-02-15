import OAuthContainer from "./oauth";

import { PageLayout } from "@components";

const LoginPage = () => {
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

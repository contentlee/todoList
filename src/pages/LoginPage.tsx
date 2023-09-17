import { OAuthContainer } from "@containers/login";
import { PageLayout } from "@components/common";

const LoginPage = () => {
  return (
    <PageLayout
      css={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OAuthContainer></OAuthContainer>
    </PageLayout>
  );
};

export default LoginPage;

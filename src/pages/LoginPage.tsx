import { PageLayout } from "@components/common";
import { OAuthContainer } from "@containers/login";

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

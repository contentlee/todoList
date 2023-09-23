import { useEffect } from "react";

import { useRecoilState } from "recoil";
import { useGoogleLogin } from "@react-oauth/google";

import { useLogin, useRefresh } from "@api/user";

import { alertAtom } from "@atoms/stateAtom";

import { Button } from "@components/common";

const OAuthContainer = () => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const { mutate: loginMutate } = useLogin();
  const { mutate: refreshMutate } = useRefresh();

  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      loginMutate(code);
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: "로그인에 실패하였습니다." });
    },
    flow: "auth-code",
  });

  useEffect(() => {
    refreshMutate();
  }, []);

  return (
    <Button size="large" css={{ width: "100%" }} onClick={googleSocialLogin}>
      GOOGLE 로그인
    </Button>
  );
};

export default OAuthContainer;

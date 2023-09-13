import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { useGoogleLogin } from "@react-oauth/google";

import { login, refresh } from "@api/user";
import { userAtom } from "@atoms/userAtom";

import { Button } from "@components/common";
import { alertAtom } from "@atoms/stateAtom";

const OAuthContainer = () => {
  const navigate = useNavigate();

  const [_, setUser] = useRecoilState(userAtom);
  const [__, setAlert] = useRecoilState(alertAtom);

  const { mutate: loginMutate } = useMutation(login);
  const { mutate: refreshMutate } = useMutation(refresh);

  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      loginMutate(code, {
        onSuccess: ({ access_token }) => {
          setUser({ access_token, is_logged_in: true });
        },
        onError: () => {
          setAlert({ isOpened: true, type: "error", children: "로그인에 실패하였습니다." });
        },
      });
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: "로그인에 실패하였습니다." });
    },
    flow: "auth-code",
  });

  useEffect(() => {
    const refresh_token = document.cookie.split("=")[1];
    if (refresh_token) {
      refreshMutate(_, {
        onSuccess: ({ access_token }) => {
          if (access_token) {
            setUser({ access_token, is_logged_in: true });
            navigate("/");
          }
        },
        onError: () => {},
      });
    }
  }, []);

  return (
    <Button size="large" css={{ width: "100%" }} onClick={googleSocialLogin}>
      GOOGLE 로그인
    </Button>
  );
};

export default OAuthContainer;

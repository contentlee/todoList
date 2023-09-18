import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { useGoogleLogin } from "@react-oauth/google";

import { login, refresh } from "@api/user";

import { userAtom } from "@atoms/userAtom";
import { alertAtom } from "@atoms/stateAtom";

import { Button } from "@components/common";

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
        onSuccess: ({ access_token, email, name }) => {
          setUser({ access_token, is_logged_in: true, email, name });
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
    refreshMutate(_, {
      onSuccess: ({ access_token, email, name }) => {
        if (access_token) {
          setUser({ access_token, is_logged_in: true, email, name });
          navigate("/");
        }
      },
      onError: () => {
        console.log("로그인이 필요합니다.");
      },
    });
  }, []);

  return (
    <Button size="large" css={{ width: "100%" }} onClick={googleSocialLogin}>
      GOOGLE 로그인
    </Button>
  );
};

export default OAuthContainer;

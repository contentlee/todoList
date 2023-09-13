import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { useRecoilState, useResetRecoilState } from "recoil";

import { userAtom } from "@atoms/userAtom";

import { refresh } from "./user";

export const http = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

interface Props {
  children?: React.ReactNode;
}

const HttpProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [userInfo, setUser] = useRecoilState(userAtom);

  const resetUser = useResetRecoilState(userAtom);
  const { mutate } = useMutation(refresh);

  useEffect(() => {
    const reqIntercepter = http.interceptors.request.use((config) => {
      if (userInfo.access_token) {
        config.headers["Authorization"] = `Bearer ${userInfo.access_token}`;
      }
      return config;
    });

    return () => http.interceptors.request.eject(reqIntercepter);
  }, [userInfo]);

  useEffect(() => {
    const resInterceptor = http.interceptors.response.use(
      <T,>(config: AxiosResponse<T, any>): T => config.data,
      (err: AxiosError) => {
        if (err.code === "401") {
          resetUser();
          navigate("/");
        }
        if (err.code === "403") {
          mutate("", {
            onSuccess: ({ access_token }) => {
              if (access_token) {
                setUser({ access_token, is_logged_in: true });
                navigate("/");
              }
            },
          });
        }
      }
    );

    return () => http.interceptors.response.eject(resInterceptor);
  }, []);

  return children;
};

export default HttpProvider;

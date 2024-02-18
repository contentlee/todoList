import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { userAtom } from "@atoms/userAtom";

import { useRefresh } from "./user";

export const http = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
  maxRedirects: 5,
});

interface Props {
  children?: React.ReactNode;
}

const HttpProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const user = window.localStorage.getItem("user");

  const { mutate } = useRefresh(() => {
    navigate("/");
  });

  const reqInterceptor = http.interceptors.request.use((config) => {
    if (!user) return config;

    const userInfo = JSON.parse(user);
    config.headers["Authorization"] = `Bearer ${userInfo.access_token}`;

    return config;
  });

  const resInterceptor = http.interceptors.response.use(
    <T,>(config: AxiosResponse<T, any>): T | AxiosResponse => {
      if (config.data) {
        return config.data;
      }
      return config;
    },
    (err: AxiosError) => {
      if (err.response?.status === 401) {
        localStorage.removeItem("user");
        // resetUser();
        navigate("/");
      }

      if (err.response?.status === 403) {
        mutate();
      }
    }
  );

  useEffect(() => {
    return () => {
      http.interceptors.request.eject(reqInterceptor);
      http.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  return children;
};

export default HttpProvider;

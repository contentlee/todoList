import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios, { AxiosError, AxiosResponse } from "axios";

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

  const access_token = window.localStorage.getItem("access_token");

  const { mutate } = useRefresh(() => {
    navigate("/");
  });

  const reqInterceptor = http.interceptors.request.use((config) => {
    if (!access_token) return config;

    config.headers["Authorization"] = `Bearer ${JSON.parse(access_token)}`;

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
        localStorage.removeItem("access_token");
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

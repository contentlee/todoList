import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "react-query";
import { useRecoilState, useResetRecoilState } from "recoil";

import { http } from "./api";

import { alertAtom } from "@atoms/alertAtom";
import { userAtom } from "@atoms/userAtom";
import { ALERT_MSG } from "@utils/constant";
import { ChartResponse, TokenResponse } from "@utils/types/user";

const login = async (credential: string): Promise<TokenResponse> => await http.post("login/", { credential });
export const useLogin = (successAction = () => {}) => {
  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(login, {
    onSuccess: ({ access_token, email, name }) => {
      const user = { access_token, name, email };
      localStorage.setItem("user", JSON.stringify(user));

      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.login.success });
      successAction();
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.login.error });
    },
  });
};

const logout = async () => await http.post("login/logout/");
export const useLogout = (successAction = () => {}) => {
  const navigate = useNavigate();

  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(logout, {
    onSuccess: () => {
      localStorage.removeItem("user");

      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.logout.success });
      successAction();

      navigate("/");
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.logout.error });
    },
  });
};

const refresh = async (): Promise<TokenResponse> => await http.post("login/refresh/");
export const useRefresh = (successAction = () => {}, errorAction = () => {}) => {
  const [__, setUser] = useRecoilState(userAtom);

  return useMutation(refresh, {
    onSuccess: ({ access_token, email, name }) => {
      if (access_token) {
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify({ access_token, name, email }));
        successAction();
      }
    },
    onError: () => {
      console.log("로그인이 필요합니다.");
      errorAction();
    },
  });
};

const removeUser = async () => await http.delete("user/remove");
export const useRemoveUser = () => {
  const navigate = useNavigate();

  const [_, setAlert] = useRecoilState(alertAtom);

  return useMutation(removeUser, {
    onSuccess: () => {
      localStorage.removeItem("user");
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.remove.success });
      navigate("/");
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.remove.error });
    },
  });
};

const getUserChartAll = async (): Promise<ChartResponse> => await http.get("user/chart/all");
export const useGetChartAll = () => {
  return useQuery(["chart", "all"], () => getUserChartAll());
};

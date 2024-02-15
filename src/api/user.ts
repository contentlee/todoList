import { useNavigate } from "react-router";
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
  const [__, setUser] = useRecoilState(userAtom);

  return useMutation(login, {
    onSuccess: ({ access_token, email, name }) => {
      setUser({ access_token, is_logged_in: true, email, name });
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
  const resetUser = useResetRecoilState(userAtom);

  return useMutation(logout, {
    onSuccess: () => {
      resetUser();
      navigate("/");
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.logout.success });
      successAction();
    },
    onError: () => {
      setAlert({ isOpened: true, type: "error", children: ALERT_MSG.logout.error });
    },
  });
};

const refresh = async (): Promise<TokenResponse> => await http.post("login/refresh/");
export const useRefresh = (errorAction = () => {}) => {
  const navigate = useNavigate();
  const [__, setUser] = useRecoilState(userAtom);

  return useMutation(refresh, {
    onSuccess: ({ access_token, email, name }) => {
      if (access_token) {
        setUser({ access_token, is_logged_in: true, email, name });
        navigate("/");
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
  const resetUser = useResetRecoilState(userAtom);

  return useMutation(removeUser, {
    onSuccess: () => {
      resetUser();
      navigate("/");
      setAlert({ isOpened: true, type: "success", children: ALERT_MSG.remove.success });
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

import { useNavigate } from "react-router";
import { useMutation, useQuery } from "react-query";
import { useRecoilState, useResetRecoilState } from "recoil";

import { http } from "./api";

import { alertAtom } from "@atoms/stateAtom";
import { userAtom } from "@atoms/userAtom";
import { ALERT_MSG } from "@utils/constant";

export interface TokenResponse {
  email: string;
  name: string;
  access_token: string;
}

export interface ChartResponse {
  total_length: number;
  y: {
    total: number;
    total_completed: number;
    total_uncompleted: number;
    total_held: number;
  };
  m: {
    total: number;
    total_completed: number;
    total_uncompleted: number;
    total_held: number;
  };

  d: {
    total: number;
    total_completed: number;
    total_uncompleted: number;
    total_held: number;
  };
  used_date: number;
  average_completed: number;
  average_held: number;
  average_uncompleted: number;
  total_completed: number;
  total_held: number;
}

const login = async (credential: string): Promise<TokenResponse> => await http.post("login/", { credential });
const logout = async () => await http.post("login/logout/");
const refresh = async (): Promise<TokenResponse> => await http.post("login/refresh/");

const removeUser = async () => await http.delete("user/remove");
const getUserChartAll = async (): Promise<ChartResponse> => await http.get("user/chart/all");

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

export const useGetChartAll = () => {
  return useQuery(["chart", "all"], () => getUserChartAll());
};

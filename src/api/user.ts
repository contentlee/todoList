import { http } from "./api";

export interface TokenResponse {
  email: string;
  name: string;
  access_token: string;
}

export const login = async (credential: string): Promise<TokenResponse> => await http.post("login/", { credential });
export const logout = async (_: any) => await http.post("login/logout/");
export const refresh = async (_: any): Promise<TokenResponse> => await http.post("login/refresh/");
export const getUserInfo = async () => await http.get("user/");
export const removeUser = async (_: any) => await http.delete("user/remove");

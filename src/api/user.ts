import { http } from "./api";

export interface TokenResponse {
  message: string;
  access_token: string;
}

export const login = async (credential: string): Promise<TokenResponse> => await http.post("login/", { credential });

export const refresh = async (_: any): Promise<TokenResponse> => await http.post("login/refresh/");

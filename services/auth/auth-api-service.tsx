import {
  GetSelfResponseData,
  LoginBody,
  ObtainAccessTokenBody,
  ObtainTokenSuccessResponse,
  SignUpBody,
} from "@/types/services/auth";
import apiService from "../../utils/service-utils";

export namespace AuthAPIService {
  export async function getSelf() {
    try {
      const url = `/api/users/self`;
      const response = await apiService.get(url);
      const res = response.data.data as GetSelfResponseData;
      return res;
    } catch (error) {
      console.error("Error getting self:", error);
      return;
    }
  }

  export async function obtainTikTokAccessToken(body: ObtainAccessTokenBody) {
    try {
      const url = `/api/auth/tiktok/token`;
      const response = await apiService.post(url, body);
      const res = response.data as ObtainTokenSuccessResponse;
      return res;
    } catch (error) {
      console.error("Error obtaining tiktok access token:", error);
      throw error;
    }
  }

  export async function login(body: LoginBody) {
    const response = await apiService.post("/api/auth/login", body);
    return response;
  }

  export async function signup(body: SignUpBody) {
    const res = await apiService.post("/api/auth/signup", body);
    // const getUserData = localStorage.getItem("tokenData");
    // const { access_token } = JSON.parse(getUserData || "");
    // await login({ tiktok_access_token: access_token });

    return res;
  }
}

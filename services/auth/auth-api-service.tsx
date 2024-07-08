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
      console.error("Error logging in:", error);
      return;
    }
  }

  export async function login(body: LoginBody) {
    try {
      const url = `/api/auth/login`;
      const response = await apiService.post(url, body);
      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      return;
    }
  }

  export async function signup(body: SignUpBody) {
    try {
      const url = `/api/auth/signup`;
      await apiService.post(url, body);
      const getUserData = localStorage.getItem("tokenData");
      const { access_token } = JSON.parse(getUserData || "");
      await login({ tiktok_access_token: access_token });
    } catch (error) {
      console.error("Error signing up:", error);
      return;
    }
  }
}

import {
  LoginBody,
  ObtainAccessTokenBody,
  ObtainTokenSuccessResponse,
  SignUpBody,
} from "@/types/services/auth";
import apiService from "../../utils/service-utils";

export namespace AuthAPIService {
  export async function obtainAccessToken(body: ObtainAccessTokenBody) {
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

  export async function postLogin(body: LoginBody) {
    try {
      const url = `/api/auth/login`;
      const response = await apiService.post(url, body);
      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in:", error);
      return;
    }
  }

  export async function postSignUp(body: SignUpBody) {
    try {
      const url = `/api/auth/signup`;
      await apiService.post(url, body);
      const getUserData = localStorage.getItem("tokenData");
      const { access_token } = JSON.parse(getUserData || "");
      await postLogin({ tiktok_access_token: access_token });
    } catch (error) {
      console.error("Error signing up:", error);
      return;
    }
  }
}

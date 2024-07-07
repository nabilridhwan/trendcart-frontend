import { LoginBody, SignUpBody } from "@/types/services/auth";
import { setTokenWithTimeout } from "@/utils/token-utils";
import apiService from "../../utils/service-utils";

export namespace AuthAPIService {
  export async function postLogin(body: LoginBody) {
    try {
      const url = `/api/auth/login`;
      const response = await apiService.post(url, body);
      setTokenWithTimeout(response.data.data);
      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  export async function postSignUp(body: SignUpBody) {
    try {
      const url = `/api/auth/signup`;
      const response = await apiService.post(url, body);
      return response.data;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  }
}

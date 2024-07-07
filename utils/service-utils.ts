import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getToken } from "./token-utils";

const apiService = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig<any>> => {
    const newToken = getToken();
    if (newToken) {
      config.headers.Authorization = `Bearer ${newToken}`;
    }
    return config;
  },
  async (error): Promise<any> => {
    console.log("req error: ", error);
    return await Promise.reject(error.message);
  }
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      window.location.href = "/login";
    } else if (
      error.response?.status === 400 &&
      error.response?.data.message === "User not found"
    ) {
      window.location.href = "/sign-up";
    }
    return await Promise.reject(error);
  }
);

export default apiService;

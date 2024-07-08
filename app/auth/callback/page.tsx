"use client";

import { AuthAPIService } from "@/services/auth/auth-api-service";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AxiosError } from "axios";

const AuthCallbackPage = () => {
  const searchParams = useSearchParams();

  const handleAuthCallback = async () => {
    const code = searchParams.get("code");
    // const scopes = searchParams.get("scopes");
    // const state = searchParams.get("state");

    let tokenData: Record<string, string> = {};

    try {
      const obtainTokenResponse = await AuthAPIService.obtainTikTokAccessToken({
        redirect_uri: process.env.NEXT_PUBLIC_TIKTOK_DEV_REDIRECT_URI || "",
        code: code || "",
      });

      if (obtainTokenResponse.statusCode > 201) {
        window.location.href = "/login?error=failed to obtain token";
        return;
      }

      // If the user was able to login, we can store the token data in local storage
      tokenData = {
        open_id: obtainTokenResponse.data.open_id,
        access_token: obtainTokenResponse.data.access_token,
        avatar_url: obtainTokenResponse.data.avatar_url,
        display_name: obtainTokenResponse.data.display_name,
      };

      const loginRes = await AuthAPIService.login({
        tiktok_access_token: obtainTokenResponse.data.access_token,
      });

      localStorage.setItem("tokenData", JSON.stringify(tokenData));

      console.log("loginRes", loginRes);

      if (loginRes.status > 201) {
        //   If the login failed, means the user is not registered
        window.location.href = `/sign-up?error=failed to login&open_id=${tokenData.open_id}&tiktok_access_token=${tokenData.access_token}`;
        return;
      }

      const authToken = loginRes.data.data;
      localStorage.setItem("authToken", authToken);
      window.location.href = "/home";
    } catch (error) {
      console.error("Error occurred:", error);

      if (error instanceof AxiosError) {
        if (error.response?.request.responseURL.includes("login")) {
          //   If the login failed, means the user is not registered
          window.location.href = `/sign-up?error=failed to login&open_id=${tokenData.open_id}&tiktok_access_token=${tokenData.access_token}`;
          return;
        }

        if (error.response?.request.responseURL.includes("token")) {
          //   If there is token problem, attempt to login agaain
          window.location.href = "/login?error=failed to obtain token";
          return;
        }
      }
    }
  };

  useEffect(() => {
    handleAuthCallback();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001F3E] text-white">
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-[#f60457] h-12 w-12 mb-4"></div>
        <h2 className="text-xl">Loading...</h2>
      </div>
    </div>
  );
};

export default AuthCallbackPage;

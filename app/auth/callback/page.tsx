"use client";

import { AuthAPIService } from "@/services/auth/auth-api-service";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AuthCallbackPage = () => {
  const searchParams = useSearchParams();

  const handleAuthCallback = async () => {
    const code = searchParams.get("code");
    const scopes = searchParams.get("scopes");
    const state = searchParams.get("state");

    try {
      const response = await AuthAPIService.obtainAccessToken({
        redirect_uri: process.env.NEXT_PUBLIC_TIKTOK_DEV_REDIRECT_URI || "",
        code: code || "",
      });

      console.log(response);

      // if (response?.statusCode === 200) {
      //   await AuthAPIService.postLogin({
      //     tiktok_access_token: response.data.access_token,
      //   });
      //   const tokenData = {
      //     open_id: response.data.open_id,
      //     access_token: response.data.access_token,
      //     avatar_url: response.data.avatar_url,
      //     display_name: response.data.display_name,
      //   };
      //
      //   localStorage?.setItem("tokenData", JSON.stringify(tokenData));
      // }
    } catch (error) {
      console.error("Error occurred:", error);
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

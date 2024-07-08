"use client";
import React from "react";
import { LoginButton } from "@/app/login/login.styles";
import { ToastContainer } from "react-toastify";
import Logo from "@/public/icons/tiktok.svg";

function generateTikTokLoginLink() {
  const csrfState = Math.random().toString(36).substring(2);

  let url = "https://www.tiktok.com/v2/auth/authorize/";

  // the following params need to be in `application/x-www-form-urlencoded` format.
  url += `?client_key=${process.env.NEXT_PUBLIC_TIKTOK_DEV_CLIENT_KEY}`;
  url += "&scope=user.info.basic";
  url += "&response_type=code";
  url += "&redirect_uri=" + process.env.NEXT_PUBLIC_TIKTOK_DEV_REDIRECT_URI!;
  url += "&state=" + csrfState;

  console.log(url);
  return url;
}

export default function Login() {
  const handleLogin = () => {
    window.location.href = generateTikTokLoginLink();
  };

  return (
    <div className={"bg-darkblue h-screen flex items-center justify-center"}>
      <ToastContainer />
      <div
        className={
          "bg-white p-5 w-fit font-semibold flex flex-col items-center gap-3 rounded-2xl"
        }
      >
        <h1>Welcome to TrendCart</h1>
        <LoginButton
          variant="shadow"
          startContent={<Logo />}
          onPress={handleLogin}
        >
          Sign in with TikTok
        </LoginButton>
      </div>
    </div>
  );
}

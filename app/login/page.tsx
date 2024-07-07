"use client";
import React from "react";
import { LoginBox, LoginButton, PageWrapper } from "@/app/login/login.styles";
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
  // url += `&code_challenge=${CODE_VERIFIER}`;
  // url += '&code_challenge_method=S256';

  console.log(url);

  // res.redirect(url);
  return url;
}

export default function Login() {
  const handleLogin = () => {
    // const userInfo = {
    //   email: "Peggie_Schoen85@gmail.com",
    //   password: "ABC123213123",
    // };
    // AuthAPIService.postLogin(userInfo);

    window.location.href = generateTikTokLoginLink();
  };

  return (
    <PageWrapper>
      <ToastContainer />
      <LoginBox shadow="lg" radius={"sm"}>
        <h1>Welcome to TrendCart</h1>
        <LoginButton
          variant="shadow"
          startContent={<Logo />}
          onPress={handleLogin}
        >
          Sign in with TikTok
        </LoginButton>
      </LoginBox>
    </PageWrapper>
  );
}

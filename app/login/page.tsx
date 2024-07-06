"use client";
import React from "react";
import { LoginBox, LoginButton, PageWrapper } from "@/app/login/login.styles";
import Logo from "@/public/icons/tiktok.svg";
import { handleOAuthRedirect } from "@/services/auth/tiktok-redirection-api-service";
import { AuthAPIService } from "@/services/auth/auth-api-service";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const handleLogin = () => {
    const userInfo = {
      email: "Peggie_Schoen85@gmail.com",
      password: "ABC123213123",
    };
    AuthAPIService.postLogin(userInfo);
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

"use client";
import React from "react";
import {LoginBox, LoginButton, PageWrapper} from "@/app/login/login.styles";
import Logo from '@/public/icons/tiktok.svg';


export default function Login() {

    const handleLogin = () => {
        console.log('login button pressed')
    }

    return (
        <PageWrapper>
            <LoginBox shadow='lg' radius={'sm'}>
                <h1>Welcome to TrendCart</h1>
                <LoginButton variant="shadow" startContent={<Logo/>} onPress={handleLogin}>
                    Sign in with TikTok
                </LoginButton>
            </LoginBox>
        </PageWrapper>
    );
}

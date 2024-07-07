"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("tokenData");

    if (token) {
      window.location.href = "/home";
      return;
    }

    window.location.href = "/login";
  }, []);

  return <div></div>;
}

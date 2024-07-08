"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "@/components/auth/AuthContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TrendCart",
//   description: "Find your next product with us!",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Preconnect to Google Fonts and Fonts.gstatic.com */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      {/* Link to Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet"
      />
      <Suspense>
        <body className={inter.className}>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>{children}</AuthContextProvider>
          </QueryClientProvider>
        </body>
      </Suspense>
    </html>
  );
}

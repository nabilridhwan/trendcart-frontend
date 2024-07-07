"use client";

import { useSearchParams } from "next/navigation";

export default function AuthCallbackPage() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");
  const scopes = searchParams.get("scopes");
  const state = searchParams.get("state");

  return (
    <div>
      <p>code: {code}</p>
      <p>scopes: {scopes}</p>
      <p>state: {state}</p>
    </div>
  );
}

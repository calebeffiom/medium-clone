"use client"; // This component must be client-side

import { SessionProvider } from "next-auth/react";
import React from "react";

// This component wraps your whole application to enable session access
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
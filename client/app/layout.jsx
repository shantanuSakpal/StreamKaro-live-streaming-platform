"use client";
import "./globals.css";
import React, { useEffect } from "react";
import Navbar from "./_components/Navbar";
import { SessionProvider } from "next-auth/react";
import { UserContextProvider } from "@/app/_contexts/UserContext";

export const metadata = {
  title: "Stream Karo",
  description: "A live streaming platform",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <UserContextProvider>
            <Navbar />
            <main>{children}</main>
          </UserContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

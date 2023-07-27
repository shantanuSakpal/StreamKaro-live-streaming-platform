"use client";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  const handleStartStream = () => {};

  return status === "loading" ? (
    <div>Loading...</div>
  ) : (
    <main className="p-2">
      <h1 className="font-bold text-xl my-2">Welcome {session?.token.name}!</h1>
      {status === "authenticated" ? (
        <Link href="/stream">
          <button className="border-4 border-accent-color text-accent-color rounded-xl w-fit p-2 h-fit cursor-pointer hover:bg-accent-color hover:text-white">
            Start Streaming!
          </button>
        </Link>
      ) : (
        <button
          onClick={() => signIn()}
          className="border-4 border-accent-color text-accent-color rounded-xl w-fit p-2 h-fit cursor-pointer hover:bg-accent-color hover:text-white"
        >
          Sign in to start streaming!
        </button>
      )}
    </main>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../_assets/logo.png";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className=" border-gray-200 px-2 border-2 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={35} height={35} />
          <span className="self-center mx-1 text-2xl font-semibold whitespace-nowrap ">
            <span className="font-medium text-accent-color-light">Stream</span>
            <span className="font-bold text-accent-color">Karo</span>
          </span>
        </Link>

        <ul className="flex flex-row flex-nowrap gap-4 text-lg ">
          <li>
            <Link
              href="/"
              className="font-bold hover:text-accent-color hover:cursor-pointer"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          {session && (
            <li>
              <Link
                href={"/stream"}
                className="font-bold hover:text-accent-color hover:cursor-pointer"
              >
                Stream
              </Link>
            </li>
          )}
          <li>
            {
              // If the user is logged in, show the user's name and a sign out button
              session ? (
                <>
                  <button
                    className="font-bold hover:text-accent-color hover:cursor-pointer"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <button
                  className="font-bold hover:text-accent-color hover:cursor-pointer"
                  onClick={() => signIn()}
                >
                  Sign in
                </button>
              )
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <Link href="/" className="hidden sm:flex">
      {theme === "dark" ? (
        <Image
          src="/assets/images/logo_dark.png"
          alt="logo"
          width={238}
          height={120}
          className="ml-0 bg-white dark:bg-slate-900"
        />
      ) : (
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={238}
          height={120}
          className="ml-0 bg-white dark:bg-slate-900"
        />
      )}
    </Link>
  );
};

export default Logo;

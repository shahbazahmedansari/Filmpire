"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [search, setSearch] = useState(query || "");
  const searchContainerRef = useRef(null);
  return (
    <div className="flex bg-slate-100 gap-2 rounded-lg px-3 py-1.5 dark:bg-slate-800 border-none">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={20}
        height={20}
      />
      <Input className="bg-slate-100 border-none shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent dark:bg-slate-800" />
    </div>
  );
};

export default Searchbar;

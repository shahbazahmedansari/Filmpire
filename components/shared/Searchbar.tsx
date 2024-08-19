import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const Searchbar = () => {
  return (
    <div className="flex bg-slate-100 gap-2 rounded-lg px-3 py-1.5 dark:bg-slate-800">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={20}
        height={20}
      />
      <Input className="bg-slate-100 border-none dark:bg-slate-800" />
    </div>
  );
};

export default Searchbar;

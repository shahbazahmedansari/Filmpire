import React from "react";
import Searchbar from "../shared/Searchbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import Logo from "../shared/Logo";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between w-full fixed z-50 gap-5 bg-red-500 h-20 
    shadow-slate-100 dark:shadow-none dark:bg-slate-900"
    >
      <Logo />
      <MobileNav />
      <Theme />
      <Searchbar />
      <Avatar className="cursor-pointer mr-4 sm:mr-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;

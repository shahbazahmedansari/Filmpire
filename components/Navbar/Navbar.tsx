import React from "react";
import Searchbar from "../shared/Searchbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Theme from "./Theme";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="bg-red-500 h-20 gap-5 py-3.5 px-10">
      <div className="flex justify-between items-center gap-5 sm:ml-60">
        <MobileNav />
        <Theme />
        <Searchbar />
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;

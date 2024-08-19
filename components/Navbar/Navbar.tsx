import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Searchbar from "../shared/Searchbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="bg-red-500 h-20 sm:ml-60 items-center gap-5 py-3.5 px-10">
      <div className="flex sm:hidden">
        <Sheet>
          <SheetTrigger className="mx-2">
            <Image
              src="/assets/icons/hamburger.svg"
              alt="menu"
              width={20}
              height={20}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filmpire</SheetTitle>
              <SheetDescription>Sidebar</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex justify-between items-center gap-5">
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

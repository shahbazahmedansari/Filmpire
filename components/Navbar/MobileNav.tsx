import React from "react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "../ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger className="mx-2">
          <Image
            src="/assets/icons/hamburger.svg"
            alt="menu"
            width={50}
            height={50}
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
  );
};

export default MobileNav;

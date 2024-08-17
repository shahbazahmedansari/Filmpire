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

const Navbar = () => {
  return (
    <>
      <nav className="bg-red-500 h-20 flex justify-between sm:ml-60">
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
        Navbar
      </nav>
    </>
  );
};

export default Navbar;

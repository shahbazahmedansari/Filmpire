import React from "react";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top-rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  "Action",
  "Comedy",
  "Crime",
  "Drama",
  "Mystery",
  "Romance",
  "Thriller",
];

const MobileNav = () => {
  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger className="mx-2" asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="menu"
            width={50}
            height={50}
          />
        </SheetTrigger>
        <SheetContent className="border-none">
          <Link href="/" className="flex justify-center">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={238}
              height={120}
              className="bg-white ml-0"
            />
          </Link>

          <section
            className="w-full min-h-screen flex overflow-y-scroll mt-20 
    justify-center"
          >
            <div className="flex flex-col w-full">
              <div className="border-t-2 border-slate-300 border-solid w-full"></div>
              <div className="flex justify-start text-slate-700 m-3">
                <h1>Categories</h1>
              </div>
              {categories.map((item) => (
                <div key={item.label} className="m-3">
                  {item.label}
                </div>
              ))}
              <div className="border-t-2 border-slate-300 border-solid w-full"></div>
              <div className="flex justify-start text-slate-700 m-3">
                <h1>Genres</h1>
              </div>
              {demoCategories.map((item) => (
                <div key={item} className="m-3">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

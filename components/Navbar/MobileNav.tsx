import React from "react";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { getGenres } from "@/lib/actions";
import genreIcons from "../../public/assets/genres";
import { categories } from "@/constants";

const MobileNav = async () => {
  const genreData = await getGenres();
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
        <SheetContent className="border-none overflow-y-scroll sm:hidden">
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
              {categories.map((item: { label: string; value: string }) => (
                <Link href={`/${item.value}`} key={item.label}>
                  <div className="m-3 flex items-center">
                    <Image
                      // @ts-ignore
                      src={genreIcons[item.label.toLowerCase()]}
                      // @ts-ignore
                      alt={genreIcons[item.label.toLowerCase()]}
                      width={30}
                      height={30}
                      className="mr-5"
                    />
                    <p>{item.label}</p>
                  </div>
                </Link>
              ))}
              <div className="border-t-2 border-slate-300 border-solid w-full"></div>
              <div className="flex justify-start text-slate-700 m-3">
                <h1>Genres</h1>
              </div>
              {genreData.genres.map((item: { name: string; id: number }) => (
                <Link key={item.id} href="/">
                  <div className="m-3 flex items-center">
                    <Image
                      // @ts-ignore
                      src={genreIcons[item.name.toLowerCase()]}
                      // @ts-ignore
                      alt={genreIcons[item.name.toLowerCase()]}
                      width={30}
                      height={30}
                      className="mr-5"
                    />
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

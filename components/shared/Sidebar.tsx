import { getGenres } from "@/lib/actions";
import React from "react";
import genreIcons from "../../public/assets/genres";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/constants";

const Sidebar = async () => {
  const genreData = await getGenres();
  return (
    <section
      className="w-[240px] min-h-screen hidden sm:flex mt-20 
    justify-center border-r-2"
    >
      <div className="flex flex-col w-full overflow-y-scroll">
        <div className="border-t-2 border-slate-300 border-solid w-full"></div>
        <div className="flex justify-start text-slate-700 m-3 dark:text-white">
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
        <div className="flex justify-start text-slate-700 m-3 dark:text-white">
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
  );
};

export default Sidebar;

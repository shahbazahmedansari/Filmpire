import { getGenres } from "@/lib/actions";
import React from "react";

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

const Sidebar = async () => {
  const genreData = await getGenres();
  console.log(genreData.genres);
  return (
    <section
      className="w-[240px] min-h-screen hidden sm:flex overflow-y-scroll mt-20 
    justify-center border-r-2"
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
        {genreData.genres.map((item: { name: string; id: number }) => (
          <div key={item.id} className="m-3">
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;

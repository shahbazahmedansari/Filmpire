import { useMovies } from "@/store/hooks/useMovies";
import React from "react";

const Page = () => {
  const movies = useMovies();
  console.log(movies);
  return <div className="font-bold text-xl mt-3">Movies</div>;
};

export default Page;

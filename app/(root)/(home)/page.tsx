"use client";
import { useMovies } from "@/store/hooks/useMovies";

export default function Home() {
  const movies = useMovies();
  console.log(movies);
  return (
    <div>
      <h1 className="font-bold text-xl mt-3">Movies</h1>
    </div>
  );
}

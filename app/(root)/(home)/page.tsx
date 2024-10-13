import MovieList from "@/components/shared/MovieList";
import { getMovies } from "@/lib/actions";

export default async function Home() {
  const topRatedMovies = await getMovies();
  return (
    <div className="flex justify-center items-center flex-wrap max-w-full">
      <MovieList movies={topRatedMovies} />
    </div>
  );
}

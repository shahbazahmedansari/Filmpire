import MovieList from "@/components/shared/MovieList";
import { getPopularMovies } from "@/lib/actions";

export default async function Popular() {
  const popularMovies = await getPopularMovies();
  return (
    <div className="flex justify-center items-center flex-wrap max-w-full">
      <MovieList movies={popularMovies} />
    </div>
  );
}

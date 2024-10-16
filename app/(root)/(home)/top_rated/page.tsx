import MovieList from "@/components/shared/MovieList";
import { getTopRatedMovies } from "@/lib/actions";

export default async function TopRated() {
  const topRatedMovies = await getTopRatedMovies();
  return (
    <div className="flex justify-center items-center max-w-full flex-wrap">
      <MovieList movies={topRatedMovies} />
    </div>
  );
}

import MovieList from "@/components/shared/MovieList";
import { getGenreMovies } from "@/lib/actions";

export default async function Action() {
  const movies = await getGenreMovies();
  return (
    <div className="flex flex-wrap justify-center items-center max-w-full">
      <MovieList movies={movies} />
    </div>
  );
}

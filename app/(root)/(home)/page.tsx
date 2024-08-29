import MovieList from "@/components/shared/MovieList";
import { getMovies } from "@/lib/actions";

export default async function Home() {
  const topRatedMovies = await getMovies();
  return (
    <div>
      <MovieList movies={topRatedMovies} />
    </div>
  );
}

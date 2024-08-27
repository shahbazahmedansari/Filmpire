import MovieList from "@/components/shared/MovieList";
import { getTopRatedMovies } from "@/lib/actions";

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  console.log(topRatedMovies);
  return (
    <div>
      <MovieList movies={topRatedMovies} />
    </div>
  );
}

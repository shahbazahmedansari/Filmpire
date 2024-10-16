import MovieList from "@/components/shared/MovieList";
import { getNowPlayingMovies } from "@/lib/actions";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  return (
    <div className="flex justify-center items-center flex-wrap max-w-full">
      <MovieList movies={nowPlayingMovies} />
    </div>
  );
}

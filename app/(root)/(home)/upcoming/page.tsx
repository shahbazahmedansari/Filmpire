import MovieList from "@/components/shared/MovieList";
import { getUpcomingMovies } from "@/lib/actions";

export default async function Upcoming() {
  const upcomingMovies = await getUpcomingMovies();
  return (
    <div className="flex flex-wrap justify-center items-center max-w-full">
      <MovieList movies={upcomingMovies} />
    </div>
  );
}

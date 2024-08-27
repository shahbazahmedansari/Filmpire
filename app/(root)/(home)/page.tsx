import { getMovies } from "@/lib/actions";

export default async function Home() {
  const topRatedMovies = await getMovies();
  console.log(topRatedMovies);
  return (
    <div>
      <h1 className="font-bold text-xl mt-3">MOVIES</h1>
    </div>
  );
}

import { useRecoilValue } from "recoil";
import { moviesAtom } from "../atoms/movies";

export const useMovies = () => {
  const movies = useRecoilValue(moviesAtom);
  return movies;
};

import { atom, selector } from "recoil";

const tmdbApiKey = process.env.NEXT_APP_TMDB_KEY;

export const moviesAtom = atom({
  key: "movies",
  default: selector({
    key: "moviesSelector",
    get: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/550?api_key=${tmdbApiKey}`
      );
      const data = response.json();
      return data;
    },
  }),
});

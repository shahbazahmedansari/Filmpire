import axios from "axios";
export async function getMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/11?api_key=${process.env.NEXT_APP_TMDB_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

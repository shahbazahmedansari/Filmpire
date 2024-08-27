"use server";
import axios from "axios";
export async function getTopRatedMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=${process.env.NEXT_APP_TMDB_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

"use server";
import axios from "axios";

export async function getMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=${process.env.NEXT_APP_TMDB_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenres() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${process.env.NEXT_APP_TMDB_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

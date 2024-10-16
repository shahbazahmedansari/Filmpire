"use server";
import axios from "axios";

export async function getNowPlayingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=${process.env.NEXT_APP_TMDB_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPopularMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=${process.env.NEXT_APP_TMDB_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

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

export async function getUpcomingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=${process.env.NEXT_APP_TMDB_KEY}`
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

export async function getGenreMovies() {
  const genreData = await getGenres();
  const genreId = genreData.genres.map((genre: { id: number }) => genre.id);
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=28&api_key=${process.env.NEXT_APP_TMDB_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

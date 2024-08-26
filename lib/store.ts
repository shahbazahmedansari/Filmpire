import { tmdbApi } from "@/app/api/TMDB";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});

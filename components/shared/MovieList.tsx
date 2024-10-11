import React from "react";
import MovieCard from "./MovieCard";

interface MovieProps {
  movies: {
    results: Object[];
  };
}

const MovieList = ({ movies }: MovieProps) => {
  console.log("movie list");
  return (
    <div className="grid mt-5">
      <div
        className="flex flex-wrap justify-between overflow-auto 
      max-sm:justify-center gap-4 p-4"
      >
        {movies.results.map((movie: Object, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

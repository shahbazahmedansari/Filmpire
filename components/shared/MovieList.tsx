import React from "react";
import MovieCard from "./MovieCard";

interface MovieProps {
  movies: {
    results: Object[];
  };
}

const MovieList = ({ movies }: MovieProps) => {
  return (
    <div className="flex flex-wrap justify-between max-sm:justify-center max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4 xl:px-30 xl:gap-20">
        {movies.results.map((movie: Object, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

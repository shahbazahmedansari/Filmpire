import React from "react";

interface MovieCardProps {
  key: number;
  index: number;
  movie: any;
}

const MovieCard = ({ key, index, movie }: MovieCardProps) => {
  return (
    <div
      className="font-bold text-slate-900
    mt-3 mb-0 text-center overflow-hidden sm:text-ellipsis w-60 whitespace-nowrap"
    >
      {movie.title}
    </div>
  );
};

export default MovieCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieCardProps {
  key: number;
  index: number;
  movie: any;
}

const MovieCard = ({ key, index, movie }: MovieCardProps) => {
  return (
    <div
      className="text-slate-900 font-bold
    mt-3 mb-0 text-center overflow-hidden sm:text-ellipsis w-60 whitespace-nowrap"
    >
      <div
        className="flex-grow hover:transition hover:duration-150 hover:ease-out hover:cursor-pointer"
        key={key}
      >
        <Link
          href={`/movie/${movie.id}`}
          className="items-center max-sm:flex max-sm:flex-col"
        >
          {/* <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={movie.title}
            width={200}
            height={300}
            className="rounded-xl mb-3 hover:scale-105"
          /> */}
        </Link>
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;

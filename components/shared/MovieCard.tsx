import Image from "next/image";
import Link from "next/link";
import React from "react";
// React Server Components
import * as motion from "framer-motion/client";

interface MovieCardProps {
  key: number;
  movie: any;
}

const MovieCard = ({ key, movie }: MovieCardProps) => {
  return (
    <div
      className="text-slate-900 font-bold
    mt-3 mb-0 text-center overflow-hidden sm:text-ellipsis w-60 whitespace-nowrap 2xl:px-10"
    >
      <motion.div
        className="flex-grow hover:transition hover:duration-150 hover:ease-out hover:cursor-pointer"
        key={key}
      >
        <Link
          href={`/movie/${movie.id}`}
          className="items-center max-sm:flex max-sm:flex-col"
        >
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={movie.title}
            width={200}
            height={300}
            className="rounded-xl mb-3 hover:scale-90 hover:rounded-xl
            hover:transition hover:duration-150 hover:ease-out hover:cursor-pointer"
          />
          <p className="text-center mr-10 dark:text-white">{movie.title}</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default MovieCard;

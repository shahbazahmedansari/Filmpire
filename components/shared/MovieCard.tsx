import Image from "next/image";
import Link from "next/link";
import * as React from "react";
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
      <div className="flex-grow" key={key}>
        <Link
          href={`/movie/${movie.id}`}
          className="items-center max-sm:flex max-sm:flex-col"
        >
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 10, stiffness: 400 }}
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
              className="rounded-xl mb-3 hover:scale-90
            hover:transition hover:duration-150 hover:ease-out"
            />
          </motion.div>
          <p className="text-center sm:mr-10 dark:text-white">{movie.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

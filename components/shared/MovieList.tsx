import MovieCard from "./MovieCard";
import * as React from "react";
import * as motion from "framer-motion/client";

interface MovieProps {
  movies: {
    results: Object[];
  };
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MovieList = ({ movies }: MovieProps) => {
  return (
    <motion.ul
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 gap-4 p-4 xl:px-30 xl:gap-20 container ml-10"
      initial="hidden"
      variants={container}
      animate="visible"
    >
      {movies.results.map((movie: Object, index: number) => (
        <motion.li key={index} variants={item}>
          <MovieCard key={index} movie={movie} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MovieList;

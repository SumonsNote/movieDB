import "server-only";

const movies = {
  movie: () => import("./movies.json").then((module) => module.default),
};

export const getMovies = async () => movies.movie();

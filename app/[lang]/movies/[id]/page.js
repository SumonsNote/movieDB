import MovieDetails from "@/app/components/MovieDetails";

import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries";
import { getMovies } from "../../movies";

export default async function MoviePage({ params: { id, lang } }) {
  const dict = await getDictionary(lang);
  const movies = await getMovies();

  const movieId = movies.find((movie) => movie.id === parseInt(id));

  if (!movieId) {
    notFound();
  }

  return <MovieDetails id={id} dict={dict} />;
}

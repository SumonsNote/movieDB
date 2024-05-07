import Figure from "../components/Figure";
import { getDictionary } from "./dictionaries";
import { getMovies } from "./movies";

export default async function Home({ params: { lang } }) {
  const movies = await getMovies();
  const dict = await getDictionary(lang);

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <Figure key={movie.id} movie={movie} dict={dict} />
        ))}
      </div>
    </div>
  );
}

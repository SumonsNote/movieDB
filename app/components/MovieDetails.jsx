import Image from "next/image";

export default async function MovieDetails({ id, dict }) {
  const response = await fetch(`${process.env.BASE_API_URL}/movies/${id}`);
  const movie = await response.json();

  return (
    <section>
      <div>
        <Image
          class="w-full object-cover border-2 border-primary max-h-[300px] lg:max-h-[500px] rounded-md"
          src={movie.backdrop_path}
          height={1200}
          width={1900}
          alt="backdrop path"
        />
      </div>

      <div class="grid grid-cols-12 py-12 gap-8">
        <div class="col-span-2">
          <Image
            className="rounded-md border-2 border-primary"
            src={movie.poster_path}
            height={720}
            width={460}
            alt="poster path"
          />
        </div>
        <div class="col-span-8">
          <h2 class="font-bold text-slate-300 text-2xl">{movie.title}</h2>
          <p class="my-2 text-slate-400 italic">{movie.overview}</p>
          <ul class="text-slate-300 space-y-2 my-8">
            <li>
              {dict.release_date} : {movie.release_date}
            </li>
            <li>
              {dict.average_vote} : {movie.vote_average}
            </li>
            <li>
              {dict.vote_count} : {movie.vote_count}
            </li>
            <li>
              {dict.popularity} : {movie.popularity}
            </li>
          </ul>
        </div>
        <div class="col-span-2 space-y-4">
          <button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.stream}
          </button>
          <button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.download}
          </button>
        </div>
      </div>
    </section>
  );
}

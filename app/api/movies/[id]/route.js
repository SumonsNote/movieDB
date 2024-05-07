import movies from "@/db/data";

export async function GET(_request, { params }) {
  const movieId = params.id;
  const movie = movies.results.find((movie) => movie.id === parseInt(movieId));
  return Response.json(movie);
}

export async function PATCH(request, { params }) {
  const movie = await request.json();
  const movieId = params.id;

  const movieIndex = movies.results.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );

  movies.results[movieIndex].title = movie.title;
  return Response.json(movies.results[movieIndex]);
}

export async function DELETE(request, { params }) {
  const movieId = params.id;
  const movieIndex = movies.results.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );
  const movieToDelete = movies.results[movieIndex];
  movies.results.splice(movieIndex, 1);

  return Response.json(movieToDelete);
}

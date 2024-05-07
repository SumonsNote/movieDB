import { getDictionary } from "@/app/[lang]/dictionaries";
import Modal from "@/app/components/Modal";
import MovieDetails from "@/app/components/MovieDetails";

export default async function MoviePage({ params: { id, lang } }) {
  const dict = await getDictionary(lang);

  return (
    <Modal>
      <MovieDetails id={id} dict={dict} />;
    </Modal>
  );
}

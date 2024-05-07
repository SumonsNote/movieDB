import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getDictionary } from "./dictionaries";

export default async function MovieLayout({
  children,
  modal,
  params: { lang },
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Aside dict={dict} />
          {modal}
          {children}
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default async function Aside({ dict }) {
  return (
    <aside>
      <ul class="space-y-2 sticky top-24">
        <li>
          <Link
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src="/icons/trending.svg" width="24" height="24" alt="" />
            <span>{dict?.trending}</span>
          </Link>
        </li>
        <li>
          <Link
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/newRelease.svg" width="24" height="24" alt="" />
            <span>{dict?.new_release}</span>
          </Link>
        </li>
        <li>
          <Link
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/commingSoon.svg" width="24" height="24" alt="" />
            <span>{dict?.coming_soon}</span>
          </Link>
        </li>
        <li>
          <Link
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/favourite.svg" width="24" height="24" alt="" />
            <span>{dict?.favourites}</span>
          </Link>
        </li>
        <li>
          <Link
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/watchLater.svg" width="24" height="24" alt="" />
            <span>{dict?.watch_later}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

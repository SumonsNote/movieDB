"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Figure({ movie, dict }) {
  const { lang } = useParams();
  return (
    <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        class="w-full object-cover"
        src={movie.poster_path}
        alt="poaster path"
        width={1000}
        height={700}
      />
      <figcaption class="pt-4">
        <h3 class="text-xl mb-1">{movie.title}</h3>
        <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div class="flex items-center space-x-1 mb-5">
          <Image src="/star.svg" alt="" width={14} height={14} />
          <Image src="/star.svg" alt="" width={14} height={14} />
          <Image src="/star.svg" alt="" width={14} height={14} />
          <Image src="/star.svg" alt="" width={14} height={14} />
          <Image src="/star.svg" alt="" width={14} height={14} />
        </div>
        <Link
          class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`${lang}/movies/${movie.id}`}
        >
          <Image src="/tag.svg" alt="" width={18} height={18} />

          <span>{dict.details}</span>
        </Link>
      </figcaption>
    </figure>
  );
}

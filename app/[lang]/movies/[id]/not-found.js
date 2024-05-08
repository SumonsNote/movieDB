"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function MovieNotFound() {
  const { id, lang } = useParams();

  return (
    <div className="flex items-center justify-center h-screen  flex-col">
      <h2 className="text-4xl">
        This movie with <span className="text-primary">{id}</span> id was not
        found!
      </h2>
      <div className="mt-5">
        <span className="mr-2"> Go back to</span>
        <Link className="text-dark rounded-md bg-primary p-2" href={"/"}>
          Home Page
        </Link>
      </div>
    </div>
  );
}

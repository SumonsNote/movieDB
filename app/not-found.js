import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen  flex-col">
      <h2 className="text-4xl">The page you are looking for is not found.</h2>
      <div className="mt-5">
        <span className="mr-2"> Go back to</span>
        <Link className="text-dark rounded-md bg-primary p-2" href={"/"}>
          Home Page
        </Link>
      </div>
    </div>
  );
}

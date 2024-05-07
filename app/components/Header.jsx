import Image from "next/image";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 bg-dark">
      <nav class="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="/logo.svg" width="139" height="26" alt="logo" />
        </Link>

        <ul class="flex items-center space-x-5">
          <li>
            <LangSwitcher />
          </li>
          <li>
            <Link
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/ring.svg" width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <Link
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/icons/sun.svg" width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <Link
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/shopping-cart.svg" width="24" height="24" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

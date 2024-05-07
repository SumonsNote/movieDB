import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Rental",
  description: "A Movie DB built by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html class="dark" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body class="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        {children}
      </body>
    </html>
  );
}

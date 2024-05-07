"use client";

import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();

  const languages = [
    {
      code: "en",
      language: "English",
      flag: "/usa.png",
    },
    {
      code: "bn",
      language: "Bangla",
      flag: "/bd.png",
    },
    {
      code: "in",
      language: "Hindi",
      flag: "/in.png",
    },
  ];

  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(languages.find((item) => item.code === lang));
    setShowMenu(false);
    router.push(`/${lang}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2 hover:bg-gray-700 text-primary font-bold text-sm rounded-md p-1 border border-green-600"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            className="max-w-8"
            src={selectedLanguage.flag}
            alt={selectedLanguage.language}
            height={25}
            width={25}
          />
          {selectedLanguage.language}
        </button>
        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-dark p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md text-white cursor-pointer hover:bg-gray-700 hover:text-primary "
              >
                <Image
                  className="max-w-8"
                  src={entry.flag}
                  alt={entry.language}
                  height={25}
                  width={25}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

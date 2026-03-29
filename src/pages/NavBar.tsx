"use client";
import { useEffect, useState } from "react";
import LanguageToggle from "../components/LanguageToggle";
import Image from "next/image";

type NavTheme = "transparent" | "dark" | "light";

export default function NavBar() {
  const [theme, setTheme] = useState<NavTheme>("transparent");

  const navItems = [
    "Home",
    "About",
    "Our Service",
    "Delivery",
    "FAQ",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setTheme("transparent");
        return;
      }

      const sections = document.querySelectorAll<HTMLElement>("[data-theme]");
      let foundTheme: NavTheme = "dark";

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 64 && rect.bottom >= 64) {
          const sectionTheme = sec.dataset.theme;
          if (sectionTheme === "light" || sectionTheme === "dark") {
            foundTheme = sectionTheme;
          }
        }
      });

      setTheme(foundTheme);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = {
    transparent: "bg-transparent text-white",
    dark: "bg-black/40 text-white backdrop-blur-md ",
    light: "bg-white/50 text-black backdrop-blur-md ",
  }[theme];

  const useDarkText = theme === "light";

  return (
    <nav className={`  z-30 w-full fixed px-20  justify-between pt-2  flex flex-row min-h-22 ${navClass}`}>
      <div className="flex flex-row  gap-15  items-center ">
        <Image
          src={"/assets/logo.svg"}
          alt="Logo"
          height={0}
          width={0}
          className={`h-max w-max mb-2 ${useDarkText ? "invert" : ""}`}
        />
        <ul className=" flex gap-6 flex-row gap">
          {navItems.map((item) => (
            <li
              className={`text-rale cursor-pointer ${useDarkText ? "text-black" : "text-white"} hover:underline`}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <LanguageToggle iconClassName={useDarkText ? "invert" : ""} />
    </nav>
  );
}

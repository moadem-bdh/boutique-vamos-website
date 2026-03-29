"use client";
import { useEffect, useState } from "react";
import LanguageToggle from "../components/LanguageToggle";
import Image from "next/image";

type NavTheme = "transparent" | "dark";

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
      setTheme(window.scrollY < 8 ? "transparent" : "dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = {
    transparent: "bg-transparent text-white",
    dark: "bg-black text-white  ",
  }[theme];

  return (
    <nav
      className={` transition-all duration-400 ease-in-out  z-30 w-full fixed px-20 transi  justify-between pt-2  flex flex-row min-h-22 ${navClass}`}
    >
      <div className="flex flex-row  gap-15  items-center ">
        <Image
          src={"/assets/logo.svg"}
          alt="Logo"
          height={0}
          width={0}
          className="h-14 w-auto mb-2"
        />
        <ul className=" flex gap-6 flex-row gap">
          {navItems.map((item) => (
            <li
              className="font-rale cursor-pointer text-white hover:underline"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <LanguageToggle />
    </nav>
  );
}

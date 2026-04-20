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
    dark: "bg-black  ",
  }[theme];

  return (
    <nav
      className={` transition-all duration-400 ease-in-out  z-30 w-full fixed px-4 sm:px-5 md:px-10 lg:px-20  justify-between pt-3 lg:pt-2  flex flex-row min-h-18 sm:min-h-20 ${navClass}`}
    >
      <div className="flex w-max lg:w-full flex-row items-center">
        <Image
          src={"/assets/logo.svg"}
          alt="Logo"
          height={0}
          width={0}
          className="h-12 w-auto mb-2"
        />

       <ul className=" lg:flex hidden w-full flex-row gap-6 pl-3 sm:pl-4 md:pl-6 lg:pl-10">
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
         <button className=" block lg:hidden cursor-pointer">     <Image
          src={"/assets/menuIcon.svg"}
          alt="Logo"
          height={0}
          width={0}
          className="h-7 w-auto "
        />
        </button>



    </nav>
  );
}

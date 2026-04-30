"use client";
import { useEffect, useState } from "react";
import LanguageToggle from "../components/LanguageToggle";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { navData } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useToggle from "@/costumHooks/useToggle";
import Menu from "@/modals/Menu";
import MenuIcon from "@/components/MenuIcon";

type NavTheme = "transparent" | "dark";

export default function NavBar({ lang }: { lang: "fr" | "en" } ) {
  const [theme, setTheme] = useState<NavTheme>("transparent");
  const { language } = useLanguage();
  const pathname = usePathname();
  const isDeliveryPage = pathname === `/${lang}/delivery` ;
  const [menuToggle, setMenuToggle] = useToggle();
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
    transparent: ` ${isDeliveryPage && "invert"} bg-transparent text-white`,
    dark: "bg-black  ",
  }[theme];

  return (
    <nav
      id="hero"
      className={` transition-all ${isDeliveryPage ? "sticky top-0" : "fixed"} duration-300 ease-in-out z-50 w-full  px-4 sm:px-5 md:px-10 lg:px-20  justify-between pt-3 lg:pt-2  flex flex-row min-h-18 sm:min-h-20 ${navClass}`}
    >
      <div className="flex z-50 w-max lg:w-full flex-row items-center">
        <Image
          src={"/assets/logo.svg"}
          alt="Logo"
          height={0}
          width={0}
          className="h-12 w-auto mb-2"
        />

        <ul className=" z-50 lg:flex hidden w-full flex-row gap-6 pl-3 sm:pl-4 md:pl-6 lg:pl-10">
          {navData.items.map((item, index) => (
            <li key={index}>
              <Link
                href={`/${lang}${item.href}`}
                className="font-rale text-white hover:underline"
              >
                {item[language]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <LanguageToggle />

      <MenuIcon open={menuToggle} onClick={setMenuToggle} />

      <Menu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </nav>
  );
}

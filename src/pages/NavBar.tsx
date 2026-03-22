"use client";
import LanguageToggle from "../components/LanguageToggle";
import Image from "next/image" ;


export default function NavBar() {
  const navItems = [
    "Home",
    "About",
    "Our Service",
    "Delivery",
    "FAQ",
    "Contact",
  ];

  return (
    <nav className=" z-10 w-full fixed px-20  justify-between   flex flex-row h-25 pt-6 pb-4.5 ">
      <div className="flex flex-row  gap-15  items-center ">
        <Image src={"/assets/logo.svg"} alt="Logo" height={0} width={0}  className="h-max w-max mb-2"/>
        <ul className=" flex gap-6 flex-row gap">
          {navItems.map((item) => (
            <li
              className="text-rale cursor-pointer text-white hover:underline"
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

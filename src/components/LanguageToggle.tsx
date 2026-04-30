import Image from "next/image";
import LanguageOption from "./LanguagrOption";
import useToggle from "../costumHooks/useToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

type Language = {
  id: "fr" | "en";
  name: {
    en: string;
    fr: string;
  };
};

export default function LanguageToggle({
  iconClassName = "",
}: {
  iconClassName?: string;
}) {
  const languages: Language[] = [
    { id: "fr", name: { en: "French", fr: "Francais" } },
    { id: "en", name: { en: "English", fr: "Anglais" } },
  ];
  const [isOpen, setIsOpen] = useToggle(false);
  const { language } = useLanguage();
  const pathname = usePathname() ;
  const router = useRouter() ;

  const switchLanguages = (newLang:string) =>{
  
    const newPath = pathname?.replace(/^\/(fr|en)/ , `/${newLang}`);
    router.push(newPath ?? "en")
  }

  return (
    <div
      className="relative z-50  mb-1 flex items-center cursor-pointer"
      onClick={setIsOpen}
    >
      <Image
        src="/assets/language.svg"
        className={`h-9 ${iconClassName}`}
        alt="Language icon"
        width={36}
        height={36}
      />
      <Image
        src="/assets/arrow.svg"
        alt="arrow icon"
        width={24}
        height={24}
        className={`${iconClassName} ${isOpen ? "rotate-0" : "rotate-180"} transition-all ease-in-out duration-300`}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex p-1 border-black  border-solid border-2 flex-col justify-between items-center gap-1.25 w-32.5 rounded-[15px] bg-white -right-10 absolute top-14 "
          >
            {languages.map((item) => (
              <LanguageOption
                key={item.id}
                id={item.id}
                lang={item.name[language]}
                selected={language}
                switchLanguages={switchLanguages}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

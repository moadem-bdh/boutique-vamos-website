import Image from "next/image";
import LanguageOption from "./LanguagrOption";
import useToggle from "../costumHooks/useToggle";

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

  const currentLangKey = "fr";

  return (
    <div
      className=" flex items-center relative mb-4 cursor-pointer"
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

      {isOpen && (
        <div className="flex p-1 flex-col justify-between items-center gap-1.25 w-32.5 rounded-[15px] bg-white -right-10 absolute top-14 ">
          {languages.map((item) => (
            <LanguageOption
              key={item.id}
              id={item.id}
              lang={item.name[currentLangKey]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

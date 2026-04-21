export default function LanguageOption({
  lang,
  selected,
  id,
  setLanguage
}: {
  lang: string;
  selected?: string;
  id: "fr" | "en";
  setLanguage:(lang:"fr" | "en")=> void ;
}) {
  const isSelected = selected === id;

  return (
    <div
      className={`flex justify-center rounded-[15px] cursor-pointer items-center font-rale w-full px-2.5 py-2 text-xl transition-all duration-300 ease-in-out ${
        isSelected
          ? "bg-black text-white"
          : "bg-transparent text-black hover:bg-black hover:text-white"
      }`}
      onClick={()=>setLanguage(id)}
    >
      {lang}
    </div>
  );
}

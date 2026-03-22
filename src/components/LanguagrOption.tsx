export default function LanguageOption({
  lang,
}: {
  lang: string;
  selected?: string;
  id: "fr" | "en";
}) {
  return (
    <div
      className={`flex justify-center rounded-[15px] cursor-pointer items-center font-rale w-full px-2.5 py-2  hover:bg-black hover:text-white text-xl `}
    >
      {lang}
    </div>
  );
}

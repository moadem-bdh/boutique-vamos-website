import Image from "next/image";

export default function OneSocial({
  imageUrl,
  name,
  content,
  url,
}: {
  imageUrl: string;
  name: string;
  content: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-row h-max w-max min-w-42 gap-2 lg:gap-4"
    >
      <Image
        src={imageUrl}
        alt={name}
        width={32}
        height={32}
        className={` h-6 w-6 lg:h-8 lg:w-8`}
      />
      <p className="whitespace-nowrap  font-rale text-[16px] md:text-xl lg:text-2xl font-semibold ">{content}</p>
    </a>
  );
}

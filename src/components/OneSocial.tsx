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
      className="flex flex-row gap-4"
    >
      <Image
        src={imageUrl}
        alt={name}
        width={32}
        height={32}
        className={` h-8 w-8`}
      />
      <p className="  font-rale text-2xl font-semibold ">{content}</p>
    </a>
  );
}


import Image from "next/image";


export default function NavCircule({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div className=" flex flex-col  items-center gap-4 ">
      <div className=" w-13 h-13 outline-3 rounded-full flex justify-center items-center outline-white bg-white/10 ">
        <Image src={image} alt="Icon" className=" w-max h-max " width={48} height={48} />
      </div>
      <p className="font-rale text-white text-4 font-bold min-w-14 ">{text}</p>

    </div>
  );
}

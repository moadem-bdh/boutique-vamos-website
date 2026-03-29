"use client";
import NavCircule from "../components/Navcircule";
import Image from "next/image";

export default function HeroSection() {
  const assetImages = [
    {
      id: 1,
      img: "/assets/global.svg",
      title: "Online Store",
    },
    {
      id: 2,
      img: "/assets/box.svg",
      title: "Home Delivery",
    },
    {
      id: 3,
      img: "/assets/diamon.svg",
      title: "High Quality",
    },
    {
      id: 4,
      img: "/assets/wallet.svg",
      title: "Cash on Delivery",
    },
  ];

  return (
    <section
      data-theme="dark"
      className="relative flex flex-col px-20 justify-center gap-16  w-full h-screen min-h-180 z-1"
    >
      <div className=" bg-[url('/assets/stadium_hero.png')]  flex flex-col opacity-[0.08]  bg-cover bg-no-repeat bg-center absolute z-1 inset-0 h-full w-full   " />

      <div className=" mt-16 flex gap-1.5 flex-col w-max ">
        <h1 className=" text-7xl text-white font-rale font-bold ">
          Boutique VAMOS
        </h1>
        <h3 className=" text-5xl text-white font-rale ">Champion&#39;s look</h3>
        <p className="text-white font-rale text-4 w-170 text  ">
          Show your love for the game and wear your team&#39;s colors with pride
          through our authentic football jerseys. Whether you&#39;re cheering
          from the stands or watching at home, our exclusive collections let you
          support your favorite players in unmatched style and comfort.
        </p>
        <hr className=" w-full border-white border-3 mt-10 rounded  " />
      </div>

      <div className=" flex  flex-row w-148 justify-between ">
        {assetImages.map((ass) => (
          <NavCircule image={ass.img} text={ass.title} key={ass.id} />
        ))}
      </div>

      <Image
        src="/assets/foot_ball.png"
        alt="Foot Ball image"
        width={400}
        height={600}
        className=" absolute min-h-160 w-max h-[90vh] right-20 bottom-0  "
      />
    </section>
  );
}

"use client";
import NavCircule from "../components/Navcircule";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";


export default function HeroSection() {

   const isPhone = useMediaQuery({ query: "(max-width: 767px)" });

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
    <section className="relative flex flex-col px-4  lg:px-20 justify-center gap-16   w-full h-screen min-h-180 z-1">
      <div className=" bg-[url('/assets/stadium_hero.png')]  flex flex-col opacity-[0.08]  bg-cover bg-no-repeat bg-center absolute -z-10 inset-0 h-full w-full   " />

      <div className="  mt-16 flex items-center lg:items-start gap-3 lg:gap-1.5 flex-col w-full lg:w-max ">
        <h1 className="w-fmax text-4xl lg:text-7xl text-white font-rale font-bold ">
          Boutique VAMOS
        </h1>
        <h3 className="w-max text-2xl lg:text-5xl text-white font-rale ">Champion&#39;s look</h3>
        <p className="text-white w-full text-center lg:text-start font-rale t text-sm lg:text-[16px] lg:w-170 text   ">
          Show your love for the game and wear your team&#39;s colors with pride
          through our authentic football jerseys. Whether you&#39;re cheering
          from the stands or watching at home, our exclusive collections let you
          support your favorite players in unmatched style and comfort.
        </p>
        <hr className=" w-90/100 lg:w-full border-white border-3 mt-18 lg:mt-10 rounded  " />
      </div>

      <div className=" flex mt-6 lg:mt-0  flex-row w-full lg:w-148 justify-between ">
        {assetImages.map((ass) => (
          <NavCircule image={ass.img} text={ass.title} key={ass.id} />
        ))}
      </div>

      { !isPhone && <Image
        src="/assets/foot_ball.png"
        alt="Foot Ball image"
        width={400}
        height={600}
        className=" absolute min-h-160 w-max h-[90vh] right-20 bottom-0  "
      />}
    </section>
  );
}

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
    <section className="relative items-center lg:items-start flex flex-col px-4 md:px-6 lg:px-10 xl:px-20 justify-center gap-6 lg:gap-10 xl:gap-16  w-full h-screen min-h-180 z-1">
      <div className=" bg-[url('/assets/stadium_hero.png')]  flex flex-col opacity-[0.12]  bg-cover bg-no-repeat bg-center absolute -z-10 inset-0 h-full w-full   " />
      
      <Image         
        src="/assets/logo.svg"
        alt="Foot Ball image"
        width={170}
        height={160}
        className="block lg:hidden -mt-10 md:mt-12"
        />


      <div className=" lg:mt-10 xl:mt-16 flex items-center lg:items-start md:gap-2.5 lg:1.5 flex-col w-full lg:w-max ">
        <h1 className="w-fmax text-4xl md:text-[52px] lg:text-[56px] xl:text-7xl text-white font-rale font-bold ">
          Boutique VAMOS
        </h1>
        <h3 className="w-max text-2xl lg:text-4xl xl:text-5xl text-white font-rale ">Champion&#39;s look</h3>
        <p className=" hidden md:block text-white w-full text-center lg:text-start font-rale t text-sm lg:text-[14px] xl:text-[16px] lg:w-140 xl:w-170 text   ">
          Show your love for the game and wear your team&#39;s colors with pride
          through our authentic football jerseys. Whether you&#39;re cheering
          from the stands or watching at home, our exclusive collections let you
          support your favorite players in unmatched style and comfort.
        </p>
        <hr className=" w-90/100 mb-4 lg:mb-0 lg:w-full border-white border-3 mt-8 lg:mt-8 xl:mt-10 rounded  " />
      </div>

      <div className=" flex md:mt-6 lg:mt-0  flex-row w-full max-w-134 lg:max-w-none lg:w-130 xl:w-148 justify-between ">
        {assetImages.map((ass) => (
          <NavCircule image={ass.img} text={ass.title} key={ass.id} />
        ))}
      </div>

      <Image
        src="/assets/foot_ball.png"
        alt="Foot Ball image"
        width={400}
        height={600}
        className=" hidden lg:block absolute  min-h-140 xl:min-h-160 w-max h-[85vh] xl:h-[90vh] right-10 xl:right-20 bottom-0  "
      />
    </section>
  );
}

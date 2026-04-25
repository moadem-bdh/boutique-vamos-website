"use client";
import Image from "next/image";
import DeliveryCard from "@/components/deliveryCard";
import { useLangauge } from "@/contexts/LangaugeContext";
import { deliveryData } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function DeliverySection() {
  const { language } = useLangauge();
  const pathname = usePathname();
  
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" }); // instant not smooth
}, [pathname]);

  return (
    <section className=" w-full bg-white px-4 md:px-6 lg:px-10 xl:px-20 lg:pt-18 pt-20  pb-20">
      <div className=" flex w-full flex-col items-center gap-18">
        <div className="flex flex-col items-center  gap-8">
          <h2 className="  font-rale text-5xl md:text-[56px] text-center lg:text-[64px] font-bold  text-black">
            {language === "fr" ? "Livraison" : "Delivery"}
          </h2>

          <p className=" text-center  font-rale text-[16px] lg:text-[20px] -mt-4 leading-tight text-black">
            {deliveryData.description[language]}
          </p>

          <div className=" h-1 w-75/100 rounded-full bg-black" />
        </div>

        <div className="grid w-full gap-3 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          <DeliveryCard language={language} />
          <DeliveryCard language={language} />
          <DeliveryCard language={language} />
          <DeliveryCard language={language} />
          <DeliveryCard language={language} />
          <DeliveryCard language={language} />
          <DeliveryCard language={language} />
          <DeliveryCard language={language} />
        </div>

        <Link
          href={"/"}
          className="group flex items-center cursor-pointer gap-3 font-rale text-[30px] font-semibold text-black"
        >
          {deliveryData.goBackHome[language]}
          <span className="flex h-10 w-10  items-center justify-center rounded-full border-2 border-black">
            <Image
              src="/assets/arrowButton.svg"
              alt="Go back home"
              width={24}
              height={24}
              className="h-6 w-6 rotate-45 invert transition-transform duration-200 ease-out group-hover:rotate-90"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

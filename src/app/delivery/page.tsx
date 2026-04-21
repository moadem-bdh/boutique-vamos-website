"use client";
import Image from "next/image";
import DeliveryCard from "@/components/deliveryCard";
import { useLangauge } from "@/contexts/LangaugeContext";
import { deliveryData } from "@/data";

export default function DeliverySection() {
  const { language } = useLangauge();

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-10 xl:px-20 lg:pt-10 pt-14  pb-20">
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

        <button
          type="button"
          className="group flex items-center cursor-pointer gap-3 font-rale text-[30px] font-semibold text-black"
        >
          {deliveryData.seeAllButton[language]}
          <span className="flex h-10 w-10  items-center justify-center rounded-full border-2 border-black">
            <Image
              src="/assets/arrowButton.svg"
              alt="See all"
              width={24}
              height={24}
              className="h-6 w-6 rotate-45 invert transition-transform duration-200 ease-out group-hover:rotate-90"
            />
          </span>
        </button>
      </div>
    </section>
  );
}

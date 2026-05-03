"use client";
import Image from "next/image";
import DeliveryCard from "@/components/deliveryCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { deliveryData, wilayas } from "@/data";
import Link from "next/link";
import MotionWrapper, { fadeUp } from "@/components/MotionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export default function DeliverySection({ lang }: { lang: "fr" | "en" }) {
  const { language } = useLanguage();

  return (
    <section
      id="delivery"
      className="w-full bg-white px-4 md:px-6 lg:px-10 xl:px-20 lg:pt-10 pt-14  pb-20"
    >
      <div className=" flex w-full flex-col items-center gap-18">
        <MotionWrapper
          variants={fadeUp}
          threshold={0}
          className="flex flex-col items-center  gap-8"
        >
          <h2 className="  font-rale text-5xl md:text-[56px] text-center lg:text-[64px] font-bold  text-black">
            {language === "fr" ? "Livraison" : "Delivery"}
          </h2>

          <p className=" text-center  font-rale text-[16px] lg:text-[20px] -mt-4 leading-tight text-black">
            {deliveryData.description[language]}
          </p>

          <div className=" h-1 w-75/100 rounded-full bg-black" />
        </MotionWrapper>

        <StaggerContainer
          staggerDelay={0.07}
          threshold={0}
          className="grid w-full gap-3  grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
        >
          {wilayas.slice(0, 8).map((wilaya) => (
            <StaggerItem key={wilaya.id} as="article" variants={fadeUp} duration={0.45} className="h-full">
              <DeliveryCard language={language} wilaya={wilaya} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MotionWrapper variants={fadeUp} delay={0.15}>
          <Link
            href={`/${lang}/delivery`}
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
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
}

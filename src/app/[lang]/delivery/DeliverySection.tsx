"use client";
import Image from "next/image";
import DeliveryCard from "@/components/deliveryCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { deliveryData } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import MotionWrapper, { fadeUp } from "@/components/MotionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export default function DeliverySection() {
  const { language } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // instant not smooth
  }, [pathname]);

  return (
    <section className=" w-full bg-white px-4 md:px-6 lg:px-10 xl:px-20 lg:pt-18 pt-20  pb-20">
      <div className=" flex w-full flex-col items-center gap-18">
        <MotionWrapper
          variants={fadeUp}
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
          staggerDelay={0.06}
          className="grid w-full gap-3 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
        >
          {[...Array(8)].map((_, i) => (
            <StaggerItem key={i} as="article" variants={fadeUp} duration={0.45}>
              <DeliveryCard language={language} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MotionWrapper variants={fadeUp} delay={0.1}>
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
        </MotionWrapper>
      </div>
      <MotionWrapper variants={fadeUp} delay={0.2}>
        <span className="flex w-full justify-end ">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group bg-white hover:bg-black transition-colors duration-300 ease-in-out mt-30 cursor-pointer flex h-17 w-17 lg:h-18 lg:w-18 xl:h-20 xl:w-20 items-center justify-center rounded-full border-2 border-black"
          >
            <Image
              src="/assets/arrowButton.svg"
              alt="Go to top"
              width={24}
              height={24}
              className="h-10 w-10 lg:h-10 lg:w-10 xl:h-12 xl:w-12 invert transition-all duration-300 ease-in-out group-hover:invert-0"
            />
          </button>
        </span>
      </MotionWrapper>
    </section>
  );
}

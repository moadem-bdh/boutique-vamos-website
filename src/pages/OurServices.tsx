"use client";
import Image from "next/image";
import { useLangauge } from "@/contexts/LangaugeContext";
import { servicesData } from "@/data";
import MotionWrapper, { fadeUp, fadeLeft, scaleUp } from "@/components/MotionWrapper";

export default function OurServices() {
  const { language } = useLangauge();

  return (
    <section id="services" className="bg-white py-10 md:py-14 lg:py-16 xl:py-20 w-full px-4 md:px-6 lg:px-10 xl:px-20">
      <div className="h-full w-full flex flex-col md:grid md:grid-cols-2 md:auto-rows-auto lg:grid-cols-6 lg:auto-rows-auto gap-6 md:gap-4 lg:gap-5 xl:gap-6">

        {/* Card 1 — Jersey image + CTA */}
        <MotionWrapper variants={scaleUp} duration={0.6} className="md:col-span-2 lg:col-span-4 row-span-1 bg-black rounded-4xl p-5 md:p-6 flex flex-col md:flex-row lg:flex-row gap-5">
          <div className="relative min-h-60 md:min-h-60 lg:min-h-72 xl:min-h-80 w-full md:w-[50%] lg:w-[50%] xl:w-[55%] overflow-hidden rounded-xl self-stretch">
            <Image
              src="/assets/milanShirt.jpg"
              alt="Milan shirt"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex  flex-1 flex-col gap-6 md:gap-4 lg:gap-6 justify-between py-1.5 text-white leading-tight">
            <p className="font-rale text-xl md:text-2xl lg:text-[22px] xl:text-[28px]">
              {servicesData.card1Text[language]}
            </p>

            <a
              href="https://www.instagram.com/boutique.vamos"
              target="_blank"
              rel="noreferrer"
              className="w-max rounded-full border border-white px-5 py-2 font-rale text-sm md:text-[15px] lg:text-[14px] xl:text-[16px] flex items-center gap-2"
            >
              {servicesData.card1Cta[language]}
              <Image
                src="/assets/arrowButton.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="rotate-90"
              />
            </a>
          </div>
        </MotionWrapper>

        {/* Card 2 — Title "Our Service" + description */}
        <MotionWrapper variants={fadeUp} delay={0.1} className="mb-2 lg:mb-0 order-first md:order-first lg:order-0 md:col-span-2 lg:col-span-2 row-span-1 bg-white gap-4 md:gap-2 lg:gap-3 xl:gap-3 flex flex-col md:items-center md:text-center lg:items-start lg:text-start">
          <h2 className=" md:mt-1 lg:mt-4 text-center lg:text-start font-rale text-5xl md:text-[56px] lg:text-[47px] xl:text-[56px] font-extrabold text-black">
            {language === "fr" ? "Nos Services" : "Our Service"}
          </h2>
          <p className="font-rale text-[16px]  lg:text-~[18px] xl:text-[19px] text-center lg:text-start leading-tight text-black mb-4">
            {servicesData.serviceDescription[language]}
          </p>
        </MotionWrapper>

        {/* Card 3 — Black text card */}
        <MotionWrapper variants={fadeUp} delay={0.15} duration={0.55} className="md:col-span-1 lg:col-span-2 row-span-1 gap-4 md:gap-3 lg:gap-0 bg-black rounded-4xl p-6 md:p-5 lg:p-5 xl:p-7 text-white flex flex-col justify-between">
          <p className="font-rale text-xl md:text-2xl lg:text-[22px] xl:text-[28px] leading-tight">
            {servicesData.card3Text[language]}
          </p>
          <div className="flex items-center gap-2 justify-between">
            <p className="font-rale text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-semibold text-[#B1ABAB]">
              {servicesData.card3Sub[language]}
            </p>
            <Image
              src="/assets/logo.svg"
              alt="Vamos logo"
              width={32}
              height={32}
              className="h-10 md:h-16 md:w-auto lg:h-12 xl:h-16 xl:w-auto"
            />
          </div>
        </MotionWrapper>

        {/* Card 4 — Sneaker image card */}
        <MotionWrapper variants={scaleUp} delay={0.1} duration={0.6} className="hidden md:flex md:col-span-1 lg:col-span-4 row-span-1 bg-black rounded-4xl p-5 md:p-5 lg:p-5 xl:p-6 md:flex-col lg:flex-row gap-5">
          <div className="relative md:min-h-60 lg:min-h-60 lg:h-full w-full md:w-full lg:w-[50%] xl:w-[55%] overflow-hidden rounded-xl">
            <Image
              src="/assets/tnSneaker.jpg"
              alt="Sneaker"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col md:items-start lg:items-end py-1.5 gap-4 justify-between text-white">
            <p className="font-rale text-xl md:text-2xl lg:text-[22px] xl:text-[28px] leading-tight">
              {servicesData.card4Text[language]}
            </p>
            <div className="h-12 w-12 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full border-2 border-white flex items-center justify-center self-end">
              <Image
                src="/assets/arrowButton.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}

"use client";
import NavCircule from "../components/Navcircule";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { heroData } from "@/data";
import MotionWrapper, {
  fadeUp,
  fadeLeft,
  fadeRight,
  fadeIn,
} from "@/components/MotionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative items-center lg:items-start flex flex-col px-4 md:px-6 lg:px-10 xl:px-20 justify-center gap-6 lg:gap-10 xl:gap-16  w-full h-screen min-h-180 z-1">
      <div className=" bg-[url('/assets/stadium_hero.png')]  flex flex-col opacity-[0.12]  bg-cover bg-no-repeat bg-center absolute -z-10 inset-0 h-full w-full   " />

      <MotionWrapper
        variants={fadeIn}
        duration={0.8}
        className="block lg:hidden -mt-10 md:mt-12"
      >
        <Image
          src="/assets/logo.svg"
          alt="Foot Ball image"
          width={170}
          height={160}
        />
      </MotionWrapper>

      <div className=" lg:mt-10 xl:mt-16 flex items-center lg:items-start md:gap-2.5 lg:1.5 flex-col w-full lg:w-max ">
        <MotionWrapper variants={fadeLeft} duration={0.65}>
          <h1 className="w-fmax text-4xl md:text-[52px] lg:text-[56px] xl:text-7xl text-white font-rale font-bold ">
            Boutique VAMOS
          </h1>
        </MotionWrapper>
        <MotionWrapper variants={fadeLeft} delay={0.15} duration={0.6}>
          <h3 className="w-max text-2xl lg:text-4xl xl:text-5xl text-white font-rale ">
            {heroData.subtitle[language]}
          </h3>
        </MotionWrapper>
        <MotionWrapper variants={fadeUp} delay={0.3} duration={0.55}>
          <p className=" hidden md:block text-white w-full text-center lg:text-start font-rale t text-sm lg:text-[14px] xl:text-[16px] lg:w-140 xl:w-170 text   ">
            {heroData.description[language]}
          </p>
        </MotionWrapper>
        <MotionWrapper
          variants={fadeIn}
          delay={0.4}
          duration={0.5}
          className="w-90/100 lg:w-full"
        >
          <hr className=" w-full border-white border-3 mt-8 lg:mt-8 xl:mt-10 rounded  " />
        </MotionWrapper>
      </div>

      <StaggerContainer
        staggerDelay={0.08}
        className=" flex md:mt-6 lg:mt-0  flex-row w-full max-w-134 lg:max-w-none lg:w-130 xl:w-148 justify-between "
      >
        {heroData.iconItems.map((item) => (
          <StaggerItem key={item.id} variants={fadeUp}>
            <NavCircule image={item.img} text={item.title[language]} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <MotionWrapper
        variants={fadeRight}
        delay={0.2}
        duration={0.8}
        className="hidden lg:block absolute  min-h-140 xl:min-h-160 w-max h-[85vh] xl:h-[90vh] right-10 xl:right-20 bottom-0"
      >
        <Image
          src="/assets/foot_ball.png"
          alt="Foot Ball image"
          width={400}
          height={600}
          className=" w-max h-full "
        />
      </MotionWrapper>
    </section>
  );
}

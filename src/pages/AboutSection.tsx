"use client";

import AboutCards from "@/components/AboutCards";
import OneSocial from "@/components/OneSocial";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutData } from "@/data";
import MotionWrapper, { fadeUp, fadeIn } from "@/components/MotionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export default function AboutSection() {
  const { language } = useLanguage();

  const socialLinks = [
    {
      imageUrl: "/assets/insta.svg",
      name: "Instagram",
      content: "boutique_vamos",
      url: "https://www.instagram.com/boutique_vamos/",
    },
    {
      imageUrl: "/assets/tiktok.svg",
      name: "TikTok",
      content: "boutique_vamos",
      url: "https://www.tiktok.com/@boutique_vamos",
    },
    {
      imageUrl: "/assets/whatsapp.svg",
      name: "WhatsApp",
      content: "07 93 03 67 09",
      url: "https://wa.me/213793036709",
    },
    {
      imageUrl: "/assets/facebook.svg",
      name: "Facebook",
      content: "Boutique Vamos",
      url: "https://www.facebook.com/profile.php?id=100093008490316",
    },
  ];

  return (
    <section
      id="about"
      className=" gap-12 lg:gap-0 w-full  min-h-229 flex flex-col items-center justify-between py-16 bg-white  px-4 md:px-6 lg:px-10 xl:px-20 "
    >
      <MotionWrapper variants={fadeUp} className="flex flex-col gap-2">
        <h1 className="font-rale text-black lg:text-start text-center text-5xl md:text-[56px] lg:text-[64px] font-extrabold">
          VAMOS !
        </h1>
        <p className="font-rale text-black text-[16px] text-center lg:text-start lg:text-xl">
          {aboutData.description[language]}
        </p>
      </MotionWrapper>

      <StaggerContainer
        staggerDelay={0.12}
        className="grid grid-cols-[repeat(1,minmax(280px,360px))] sm:grid-cols-[repeat(2,minmax(280px,360px))] lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(240px,1fr))] items-center gap-4 justify-evenly w-full"
      >
        {aboutData.cards.map((card) => (
          <StaggerItem key={card.bgUrl} variants={fadeUp}>
            <AboutCards
              bgUrl={card.bgUrl}
              heading={card.heading[language]}
              subHeading={card.subheading[language]}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <MotionWrapper
        variants={fadeUp}
        delay={0.1}
        className="flex flex-col items-center lg:items-start w-full gap-4"
      >
        <h2 className=" text-3xl md:text-[34px] lg:text-[40px] font-bold text-black font-rale ">
          {aboutData.socialMediaTitle[language]}
        </h2>
        <StaggerContainer
          staggerDelay={0.08}
          className="flex flex-row w-full flex-wrap justify-between sm:gap-x-4 md:gap-x-8  gap-y-2"
        >
          {socialLinks.map((social) => (
            <StaggerItem key={social.name} variants={fadeIn}>
              <OneSocial
                imageUrl={social.imageUrl}
                name={social.name}
                content={social.content}
                url={social.url}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </MotionWrapper>
    </section>
  );
}

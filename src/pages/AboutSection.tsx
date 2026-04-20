"use client";

import AboutCards from "@/components/AboutCards";
import OneSocial from "@/components/OneSocial";

export default function AboutSection() {
  const aboutCards = [
    {
      heading: "National Team Jerseys",
      bgUrl: "/assets/brazil-Image.png",
      subheading: "Show your country's colors with pride.",
    },
    {
      heading: "Club Jerseys",
      bgUrl: "/assets/real-image.png",
      subheading: "Wear the teams you love.",
    },
    {
      heading: "Everyday Basics",
      bgUrl: "/assets/joging-image.png",
      subheading:
        "Comfortable t-shirts, sweatpants, and simple pieces you can wear anytime.",
    },
    {
      heading: "Streetwear Collection",
      bgUrl: "/assets/leather-image.png",
      subheading:
        "Bold jackets and layered outfits inspired by modern football culture.",
    },
  ];

  const socialLinks = [
    {
      imageUrl: "/assets/insta.svg",
      name: "Instagram",
      content: "boutique.vamos",
      url: "https://www.instagram.com/boutique.vamos",
    },
    {
      imageUrl: "/assets/tiktok.svg",
      name: "TikTok",
      content: "boutique.vamos",
      url: "https://www.tiktok.com/@boutique.vamos",
    },
    {
      imageUrl: "/assets/whatsapp.svg",
      name: "WhatsApp",
      content: "+212 600 000 000",
      url: "https://wa.me/212600000000",
    },
    {
      imageUrl: "/assets/facebook.svg",
      name: "Facebook",
      content: "Boutique Vamos",
      url: "https://www.facebook.com/boutique.vamos",
    },
  ];

  return (
    <section className=" gap-12 lg:gap-0 w-full  min-h-229 flex flex-col items-center justify-between py-16 bg-white  px-4 md:px-6 lg:px-10 xl:px-20 ">
      <div className="flex flex-col gap-2">
        <h1 className="font-rale text-black lg:text-start text-center text-5xl md:text-[56px] lg:text-[64px] font-extrabold">
          VAMOS !
        </h1>
        <p className="font-rale text-black text-[16px] text-center lg:text-start lg:text-xl">
          Boutique Vamos blends football culture with modern street style. From
          iconic club jerseys to casual essentials and statement outerwear, our
          collection is made for fans who wear the game beyond the pitch.
          Whether you&lsquo;re repping your national team, styling a classic
          club kit, or elevating your everyday look, we deliver football fashion
          with confidence and character.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(1,minmax(280px,360px))] sm:grid-cols-[repeat(2,minmax(280px,360px))] lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(240px,1fr))] items-center gap-4 justify-evenly w-full">
        {aboutCards.map((card) => (
          <AboutCards
            key={card.bgUrl}
            bgUrl={card.bgUrl}
            heading={card.heading}
            subHeading={card.subheading}
          />
        ))}
      </div>

      <div className="flex flex-col items-center lg:items-start w-full gap-4">
        <h2 className=" text-3xl md:text-[34px] lg:text-[40px] font-bold text-black font-rale ">
          Social Media
        </h2>
        <div className="flex flex-row w-full flex-wrap justify-between sm:gap-x-4 md:gap-x-8  gap-y-2">
          {socialLinks.map((social) => (
            <OneSocial
              key={social.name}
              imageUrl={social.imageUrl}
              name={social.name}
              content={social.content}
              url={social.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

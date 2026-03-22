"use client";

import AboutCards from "@/components/AboutCards";

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

  return (
    <section className=" w-full h-164 px-20 ">
      <div className="flex flex-col gap-2">
        <h1 className="font-rale text-white">VAMOS !</h1>
        <p className="font-rale text-white text-xl">Boutique Vamos blends football culture with modern street style. From iconic club jerseys to casual essentials and statement outerwear, our collection is made for fans who wear the game beyond the pitch. Whether you&lsquo;re repping your national team, styling a classic club kit, or elevating your everyday look, we deliver football fashion with confidence and character.</p>
      </div>

      <div className="flex gap-4 justify-between w-full">
        {aboutCards.map((card) => (
          <AboutCards key={card.bgUrl} bgUrl={card.bgUrl} heading={card.heading} subHeading={card.subheading} />
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="">Social Media</h2>
        <div className="flex -gap-2"></div>
      </div>
    </section>
  );
}

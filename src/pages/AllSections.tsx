"use client";
import FaqSection from "@/pages/FaqSection";
import AboutSection from "./AboutSection";
import DeliverySection from "./DeliverySection";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import { useEffect } from "react";

export default function AllSections({ lang }: { lang: "fr" | "en" }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto"; // reset when leaving
    };
  }, []);

  return (
    <>
        <div className="w-full flex flex-col bg-black z-0 min-h-400 ">
          <HeroSection  />
          <AboutSection  />
          <OurServices />
          <DeliverySection lang={lang} />
          <FaqSection />
        </div>
    </>
  );
}

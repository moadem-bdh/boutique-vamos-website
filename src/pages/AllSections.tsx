"use client";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

export default function AllSections() {
  return (
    <>
      <div className="w-full flex flex-col bg-black z-0 min-h-400 ">

        <HeroSection />
        <AboutSection/>
      </div>
    </>
  );
}

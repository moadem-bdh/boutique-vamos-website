"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLangauge } from "@/contexts/LangaugeContext";
import { footerData } from "@/data";
import Link from "next/link";
import MotionWrapper, { fadeUp, fadeIn } from "@/components/MotionWrapper";

const contactLinks = [
  {
    label: "07 93 03 67 09",
    href: "tel:+213793036709",
  },
  {
    label: "07 82 35 19 31",
    href: "tel:+213782351931",
  },
  {
    label: "[EMAIL_ADDRESS]",
    href: "mailto:[EMAIL_ADDRESS]",
  },
];

const socials = [
  {
    label: "Facebook",
    icon: "/assets/coloredFacbook.svg",
    href: "https://www.facebook.com/profile.php?id=100093008490316",
  },
  {
    label: "WhatsApp",
    icon: "/assets/coloredWhatapp.svg",
    href: "https://wa.me/213793036709",
  },
  {
    label: "Instagram",
    icon: "/assets/coloredInsta.svg",
    href: "https://www.instagram.com/boutique_vamos/",
  },
];

export default function Footer() {
  const { language } = useLangauge();
  const pathname = usePathname();
  const isDelivery = pathname === "/delivery";

  return (
    <footer id="contact"
      className={`w-full lg:pt-5 px-1 lg:px-4 xl:px-8 transition-colors duration-300 ${
        isDelivery ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <hr
        className={`mb-6 rounded ${isDelivery ? "border-black" : "border-white"}`}
      />

      <div className="flex w-full flex-col gap-16 lg:flex-row justify-between px-3 lg:px-6 xl:px-12 py-8">
        <MotionWrapper variants={fadeUp} className="flex flex-col items-center gap-2">
          <Image
            src={isDelivery ? "/assets/logoDark.svg" : "/assets/logo.svg"}
            alt="Boutique Vamos"
            width={164}
            height={164}
            className="h-34 w-34 xl:h-40 xl:w-40"
          />
          <h2 className="font-rale text-[28px] xl:text-[30px] font-bold whitespace-nowrap">
            Boutique Vamos
          </h2>
        </MotionWrapper>

        <div className="lg:w-max w-full gap-10 lg:gap-12 xl:gap-20 flex flex-col lg:flex-row">
          <MotionWrapper variants={fadeUp} delay={0.1} className="flex flex-col gap-2">
            <h3 className="font-rale font-semibold text-[20px] xl:text-[22px] underline">
              {footerData.sectionsTitle[language]}
            </h3>
            <ul className="flex flex-wrap lg:flex-none lg:flex-col gap-3 md:gap-4 lg:gap-0.5">
              {footerData.sectionLinks.map((link) => (
                <li className="w-max" key={link.label.en}>
                  <Link
                    href={link.href}
                    className={`font-rale text-[14px] xl:text-[16px] hover:underline ${
                      isDelivery ? "text-black" : "text-white"
                    }`}
                  >
                    {link.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionWrapper>

          <MotionWrapper variants={fadeUp} delay={0.15} className="flex flex-col gap-2">
            <h3 className="font-rale whitespace-nowrap text-[20px] xl:text-[22px] font-semibold underline">
              {footerData.contactTitle[language]}
            </h3>
            <ul className="flex flex-wrap lg:flex-none lg:flex-col gap-3 md:gap-4 lg:gap-0.5">
              {contactLinks.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className={`font-rale text-[14px] xl:text-[16px] hover:underline ${
                      isDelivery ? "text-black" : "text-white"
                    }`}
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </MotionWrapper>

          <MotionWrapper variants={fadeUp} delay={0.2}>
            <form className="flex w-full flex-col gap-3 lg:min-w-80 lg:items-start">
              <label
                htmlFor="footer-message"
                className="w-full font-rale text-[20px] lg:text-[20px] xl:text-[22px] font-semibold underline"
              >
                {footerData.messageLabel[language]}
              </label>

              <textarea
                id="footer-message"
                name="message"
                rows={4}
                placeholder={footerData.messagePlaceholder[language]}
                className={`resize-none w-full scrollbar-thin scrollbar-track-transparent rounded-xl lg:w-full px-3 py-3 font-rale text-base xl:text-lg outline-none transition-colors duration-300 ${
                  isDelivery
                    ? "bg-[#BFBFBF] text-black placeholder:text-black scrollbar-thumb-[#AAAAAA] focus:border-[#BBBBBB]"
                    : "bg-[#222222] text-white placeholder:text-white scrollbar-thumb-[#3F3F3F] focus:border-[#3F3F3F]"
                }`}
              />
              <span className="flex w-full lg:justify-end">
                <button
                  type="button"
                  className={`w-max mt-1 rounded-lg border px-4 font-semibold cursor-pointer py-1.5 font-rale text-[20px] xl:text-[22px] transition-colors ${
                    isDelivery
                      ? "border-black text-black hover:bg-black hover:text-white"
                      : "border-white text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {footerData.submitButton[language]}
                </button>
              </span>
            </form>
          </MotionWrapper>
        </div>
      </div>

      <MotionWrapper variants={fadeIn} delay={0.1}>
        <div
          className={`flex gap-2 lg:px-0 px-1 border-t py-2 flex-row items-center justify-between ${
            isDelivery ? "border-[#D0D0D0]" : "border-[#2F2F2F]"
          }`}
        >
          <p
            className={`font-rale text-xs lg:text-[14px] xl:text-[16px] font-light ${
              isDelivery ? "text-black" : "text-white"
            }`}
          >
            By moadem-bdh
          </p>

          <div className="flex items-center w-max justify-center gap-2 lg:gap-2 xl:gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                />
              </a>
            ))}
          </div>

          <p
            className={`font-rale text-xs lg:text-[14px] xl:text-[16px] font-light ${
              isDelivery ? "text-black" : "text-white"
            }`}
          >
            {language === "fr" ? "Tous droits réservés 2025" : "All rights reserved 2025"}
          </p>
        </div>
      </MotionWrapper>
    </footer>
  );
}

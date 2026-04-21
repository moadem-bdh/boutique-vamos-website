"use client";
import Image from "next/image";
import { useLangauge } from "@/contexts/LangaugeContext";
import { footerData } from "@/data";

const contactLinks = [
  {
    label: "+213782351932",
    href: "tel:+213782351932",
  },
  {
    label: "+213475471111",
    href: "tel:+213475471111",
  },
  {
    label: "moadembdh@gmail.com",
    href: "mailto:moadembdh@gmail.com",
  },
];

const socials = [
  {
    label: "Facebook",
    icon: "/assets/coloredFacbook.svg",
    href: "https://www.facebook.com/boutique.vamos",
  },
  {
    label: "WhatsApp",
    icon: "/assets/coloredWhatapp.svg",
    href: "https://wa.me/213782351932",
  },
  {
    label: "Instagram",
    icon: "/assets/coloredInsta.svg",
    href: "https://www.instagram.com/boutique.vamos",
  },
];

export default function Footer() {
  const { language } = useLangauge();

  return (
    <footer className="w-full bg-black  lg:pt-5 text-white px-1 lg:px-4 xl:px-8 ">
      <hr className="mb-6 border-white rounded" />

      <div className="flex w-full flex-col gap-16 lg:flex-row justify-between  px-3 lg:px-6 xl:px-12 py-8">
        <div className="flex flex-col items-center  gap-2">
          <Image
            src="/assets/logo.svg"
            alt="Boutique Vamos"
            width={164}
            height={164}
            className="h-34 w-34 xl:h-40 xl:w-40"
          />
          <h2 className="font-rale text-[28px] xl:text-[30px] font-bold whitespace-nowrap">Boutique Vamos</h2>
        </div>

        <div className="lg:w-max w-full gap-10 lg:gap-12 xl:gap-20 flex flex-col lg:flex-row">
          
            <div className="flex flex-col gap-2">
              <h3 className="font-rale font-semibold text-[20px] xl:text-[22px] underline">
                {footerData.sectionsTitle[language]}
              </h3>
              <ul className="flex flex-wrap lg:flex-none lg:flex-col gap-3 md:gap-4 lg:gap-0.5">
                {footerData.sectionLinks.map((link) => (
                  <li className="w-max" key={link.label.en}>
                    <a
                      href={link.href}
                      className="font-rale text-[14px] xl:text-[16px]  text-white hover:underline"
                    >
                      {link.label[language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-rale text-[20px] xl:text-[22px] font-semibold underline">
                {footerData.contactTitle[language]}
              </h3>
              <ul className="flex flex-wrap lg:flex-none lg:flex-col gap-3 md:gap-4 lg:gap-0.5">
                {contactLinks.map((contact) => (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      className="font-rale text-[14px] xl:text-[16px]  text-white hover:underline"
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          
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
              className=" resize-none w-full scrollbar-thumb-[#3F3F3F] scrollbar-track-transparent  scrollbar-thin rounded-xl lg:w-full bg-[#222222] px-3 py-3 font-rale text-base xl:text-lg text-white outline-none  focus:border-[#3F3F3F]"
            />
           <span className="flex w-full lg:justify-end">

           
            <button
              type="button"
              className="w-max mt-1 rounded-lg border border-white px-4 font-semibold cursor-pointer py-1.5 font-rale text-[20px] xl:text-[22px] text-white transition-colors hover:bg-white hover:text-black"
            >
              {footerData.submitButton[language]}
            </button>
            </span>
          </form>
        </div>
      </div>

      <div className="flex gap-2 lg:px-0 px-1 border-t border-[#2F2F2F] py-2 flex-row items-center justify-between">
        <p className="font-rale text-xs lg:text-[14px] xl:text-[16px] font-light text-white">
          By moadem-bdh
        </p>

        <div className="flex items-center w-max justify-center gap-2 lg:gap-2 xl:gap-3 ">
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
                className=" h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
              />
            </a>
          ))}
        </div>

        <p className="font-rale text-xs lg:text-[14px] xl:text-[16px] font-light text-white">
          {language === "fr" ? "Tous droits réservés 2025" : "All rights reserved 2025"}
        </p>
      </div>
    </footer>
  );
}

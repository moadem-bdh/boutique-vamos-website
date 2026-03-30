import Image from "next/image";

const sectionLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Our service", href: "#" },
  { label: "Delivery", href: "#" },
  { label: "FAQ", href: "#" },
];

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
  return (
    <footer className="w-full bg-black  lg:pt-5 text-white px-1 lg:px-8 ">
      <hr className="mb-6 border-white rounded" />

      <div className="flex w-full flex-col gap-16 lg:flex-row justify-between  px-3 lg:px-12 py-8">
        <div className="flex flex-col items-center  gap-2">
          <Image
            src="/assets/logo.svg"
            alt="Boutique Vamos"
            width={164}
            height={164}
            className="h-40 w-40"
          />
          <h2 className="font-rale text-[38px] font-bold ">Boutique Vamos</h2>
        </div>

        <div className="lg:w-max w-full gap-16 lg:gap-20 flex flex-col lg:flex-row">
          <div className="gap-20 flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-rale font-semibold text-[20px] lg:text-[22px] underline">
                Sections
              </h3>
              <ul className="flex flex-col gap-0.5">
                {sectionLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-rale text-sm lg:text-[16px]  text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-rale text-[20px] lg:text-[22px] font-semibold underline">
                Contact Us on
              </h3>
              <ul className="flex flex-col gap-0.5">
                {contactLinks.map((contact) => (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      className="font-rale text-sm lg:text-[16px]  text-white hover:underline"
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <form className="flex w-full flex-col gap-3 lg:items-end">
            <label
              htmlFor="footer-message"
              className="w-full font-rale text-[20px] lg:text-[22px] font-semibold underline"
            >
              Or send a message
            </label>

            <textarea
              id="footer-message"
              name="message"
              rows={4}
              placeholder="Enter your message"
              className=" resize-none w-full scrollbar-thumb-[#3F3F3F] scrollbar-track-transparent  scrollbar-thin rounded-xl lg:w-93 bg-[#222222] px-3 py-3 font-rale text-lg text-white outline-none  focus:border-[#3F3F3F]"
            />

            <button
              type="button"
              className="w-max mt-1 rounded-lg border border-white px-4 font-semibold cursor-pointer py-1.5 font-rale text-[22px] text-white transition-colors hover:bg-white hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex  gap-2 border-t border-[#2F2F2F] py-2 flex-row items-center justify-between">
        <p className="font-rale text-xs lg:text-[16px] font-light text-white">
          By moadem-bdh
        </p>

        <div className="flex items-center w-max justify-center gap-2 lg:gap-3 ">
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
                className=" h-3.5 w-3.5 lg:h-6 lg:w-6"
              />
            </a>
          ))}
        </div>

        <p className="font-rale text-xs lg:text-[16px] font-light text-white">
          All rights reserved 2025
        </p>
      </div>
    </footer>
  );
}

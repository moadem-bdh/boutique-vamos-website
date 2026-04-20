"use client";

import Image from "next/image";
import QnA from "../components/QnA";

export default function FaqSection() {
  const faqItems = [
    {
      question: "Do you offer Cash on Delivery ?",
      answer: "Yes, cash on delivery is available in all supported wilayas.",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes between 28 and 48 hours.",
    },
    {
      question: "Can I return or exchange my jersey if it doesn’t fit?",
      answer:
        "Yes, returns and exchanges are possible based on our return policy.",
    },
    {
      question: "Do you have a shop?",
      answer: "Yes, we have a physical shop and we also ship across Algeria.",
    },
    {
      question: "Do you deliver to all 58 wilayas?",
      answer: "Yes, we deliver to all 58 wilayas nationwide.",
    },
  ];

  return (
    <section className="w-full bg-black flex px-4 md:px-6 lg:px-10 xl:px-20 py-16 pt-20 flex-col gap-10 items-end">
      <span className="w-full flex items-center justify-center">
        <h2 className="mb-10 font-rale text-5xl md:text-[56px] lg:text-[56px] xl:text-[64px] font-bold text-white">
          FAQ
        </h2>
      </span>

      <div className="w-full gap-4 lg:gap-4 xl:gap-5 flex flex-col">
        {faqItems.map((item) => (
          <QnA
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>

      <button
        type="button"
        className="mt-30  flex h-17 w-17 lg:h-18 lg:w-18 xl:h-20 xl:w-20 items-center justify-center rounded-full border-2 border-white"
      >
        <Image
          src="/assets/arrowButton.svg"
          alt="Go to top"
          width={24}
          height={24}
          className=" h-10 w-10 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
        />
      </button>
    </section>
  );
}

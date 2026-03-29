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
    <section className="w-full bg-black flex px-20 py-16 pt-20 flex-col gap-10 items-end">
      <span className="w-full flex items-center justify-center">
        <h2 className="mb-10 font-rale text-[64px] font-bold text-white">
          FAQ
        </h2>
      </span>

      <div className="w-full gap-5 flex flex-col">
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
        className="mt-30  flex h-20 w-20 items-center justify-center rounded-full border-2 border-white"
      >
        <Image
          src="/assets/arrowButton.svg"
          alt="Go to top"
          width={24}
          height={24}
          className="h-12 w-12"
        />
      </button>
    </section>
  );
}

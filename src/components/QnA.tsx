"use client";

import Image from "next/image";
import useToggle from "@/costumHooks/useToggle";

type QnAProps = {
  question?: string;
  answer?: string;
};

export default function QnA({
  question = "Do you offer Cash on Delivery?",
  answer = "Yes, cash on delivery is available in all supported wilayas.",
}: QnAProps) {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div className="w-full  bg-black px-10 py-4 flex flex-col">
      <button
        type="button"
        onClick={toggleOpen}
        className="flex cursor-pointer w-full pr-6 pl-2 items-center justify-between text-left"
      >
        <span className="font-rale font-medium text-[26px] pr-4 text-white">{question}</span>
        <Image
          src="/assets/arrow.svg"
          alt="Toggle answer"
          width={20}
          height={20}
          className={`h-9 w-9 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      

      {isOpen && (
        <div onClick={toggleOpen} className=" cursor-pointer pl-2 pt-6">
                   <p className=" font-rale text-[20px] leading-tight text-white/80">
          {answer}
        </p> 
        </div>

      )}
      <div className="mt-4 h-[0.8px] w-full rounded-full bg-white" />
    </div>
  );
}

"use client";

import Image from "next/image";
import useToggle from "@/costumHooks/useToggle";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="w-full  bg-black px-2 lg:px-6 xl:px-10 py-4 flex flex-col">
      <button
        type="button"
        onClick={toggleOpen}
        className="flex cursor-pointer w-full pr-2 lg:pr-4 xl:pr-6 pl-1 lg:pl-2 items-center justify-between text-left"
      >
        <span className="font-rale font-medium text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]  pr-4 text-white">{question}</span>
        <Image
          src="/assets/arrow.svg"
          alt="Toggle answer"
          width={20}
          height={20}
          className={`lg:h-7 lg:w-7 xl:h-9 xl:w-9 w-7 h-auto transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div onClick={toggleOpen} className=" cursor-pointer pl-1 lg:pl-2 pt-6">
              <p className=" font-rale text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] leading-tight text-white/80">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 h-[0.8px] w-full rounded-full bg-white" />
    </div>
  );
}

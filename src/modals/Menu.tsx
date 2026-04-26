"use client";

import Link from "next/link";
import { useLangauge } from "@/contexts/LangaugeContext";
import { navData } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

type MenuModalProps = {
  menuToggle: boolean;
  setMenuToggle: () => void;
};

export default function Menu({ menuToggle, setMenuToggle }: MenuModalProps) {
  const { language } = useLangauge();

  return (
    <AnimatePresence>
      {menuToggle && (
        <>
          {/* Backdrop */}
          <motion.div
            key="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={setMenuToggle}
          />

          {/* Full-screen menu panel */}
          <motion.div
            key="menu-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed border-b-5 border-white top-0 left-0 w-full z-40 bg-black px-6 pt-24 pb-8 lg:hidden"
          >
            {/* Nav links */}
            <motion.ul
              className="flex flex-col gap-0.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              }}
            >
              {navData.items.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={setMenuToggle}
                    className="block font-rale text-white text-2xl font-semibold py-3 transition-colors duration-200 hover:text-white/70"
                  >
                    {item[language]}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

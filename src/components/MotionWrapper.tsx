"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// ─── Preset animation variants ───────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

// ─── Reusable wrapper ────────────────────────────────────────────────

type MotionWrapperProps = {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  /** HTML tag to render — defaults to div */
  as?: "div" | "section" | "span" | "article" | "header" | "footer" | "nav" | "ul" | "li" | "p" | "h1" | "h2" | "h3" | "h4";
  /** Viewport trigger threshold (0-1) */
  threshold?: number;
  /** Whether to animate only once */
  once?: boolean;
};

export default function MotionWrapper({
  children,
  variants = fadeUp,
  delay = 0,
  duration = 0.55,
  className = "",
  as = "div",
  threshold = 0.15,
  once = true,
}: MotionWrapperProps) {
  const Component = motion.create(as);

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ─── Stagger container ───────────────────────────────────────────────

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "section" | "ul";
  threshold?: number;
  once?: boolean;
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  as = "div",
  threshold = 0.1,
  once = true,
}: StaggerContainerProps) {
  const Component = motion.create(as);

  return (
    <Component
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ─── Stagger child (use inside StaggerContainer) ─────────────────────

type StaggerItemProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "li" | "article" | "span";
  duration?: number;
};

export function StaggerItem({
  children,
  variants = fadeUp,
  className = "",
  as = "div",
  duration = 0.5,
}: StaggerItemProps) {
  const Component = motion.create(as);

  return (
    <Component
      variants={variants}
      transition={{
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

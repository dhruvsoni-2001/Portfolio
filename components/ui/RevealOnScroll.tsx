"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "left" | "right" | "top" | "bottom" | "scale";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction: Direction; // Direction is now mandatory
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

// Helper function to get animation variants based on direction
const getVariants = (direction: Direction) => {
  switch (direction) {
    case "left":
      return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
    case "top":
      return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
    case "bottom":
      return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    case "scale":
      return { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };
    default:
      // A fallback just in case, though TS should prevent this.
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

const RevealOnScroll: React.FC<RevealProps> = ({
  children,
  className,
  direction,
  delay = 0.1,
  duration = 0.6,
  style,
}) => {
  const ref = useRef(null);
  // THIS IS THE FIX: Changed `once: true` to `once: false`
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: "easeInOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;

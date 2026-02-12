"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView, Easing } from "framer-motion";

const colors = [
  "#8A2BE2", // Electric Purple
  "#7FFFD4", // Aqua Mint
  "#FF6EC7", // Neon Pink
  "#00FFFF", // Cyan / Aqua
  "#FFD700", // Golden Yellow
  "#ADFF2F", // Green Yellow
  "#FF8C00", // Dark Orange
  "#FF1493", // Deep Pink
  "#00CED1", // Dark Turquoise
  "#DA70D6", // Orchid
];

const ColourfulText = ({ text, isInView }: { text: string; isInView: boolean }) => {
  const [currentColors, setCurrentColors] = useState(colors);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      color: currentColors[i % currentColors.length],
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        ease: "easeInOut" as Easing,
      },
    }),
  };

  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={charVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={index}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const AnimatedTitle = () => {
  const ref = React.useRef(null);
  // COMMENTED OUT: Repeated animation triggers every scroll
  // const isInView = useInView(ref, { once: false });
  
  // ACTIVE: Show animation only once when scrolled into view
  const isInView = useInView(ref, { once: true });
  const animatedText = "A Small Selection of Recent".split(" ");

  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeInOut" as Easing,
      },
    }),
  };

  return (
    <h1
      ref={ref}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
    >
      {animatedText.map((word, index) => (
        <motion.span
          key={`word-${index}`}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={index}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
      <ColourfulText key="projects-word" text="Projects" isInView={isInView} />
    </h1>
  );
};

export default AnimatedTitle;

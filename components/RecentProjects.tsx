"use client";

import React, { useState, useEffect, useRef } from "react";
import { projects } from "@/data";
import { motion, useInView, Easing } from "framer-motion";

// New component for the colorful text animation
const ColourfulText = ({ text, isInView }: { text: string; isInView: boolean }) => {
  // New vibrant colors that pop on a dark background
  const colors = [
    "#E0BBE4", // Light Purple
    "#957DAD", // Muted Purple
    "#D291BC", // Pink
    "#FEC8D8", // Lighter Pink
    "#FFDFD3", // Peach
  ];

  const [currentColors, setCurrentColors] = useState(colors);

  useEffect(() => {
    // Shuffle colors every 5 seconds
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants for each character
  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      color: currentColors[i % currentColors.length],
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        ease: "easeInOut" as Easing, // Corrected the type for the 'ease' property
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
          animate={isInView ? "visible" : "hidden"} // Control animation
          custom={index}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

// The text to be animated
const animatedText = "A Small Selection of Recent".split(" ");

const RecentProjects = () => {
  const ref = useRef(null);
  // Trigger animation only once when the component is in view
  const isInView = useInView(ref, { once: true });

  // Animation variants for the words
  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeInOut" as Easing, // Corrected the type for the 'ease' property
      },
    }),
  };

  return (
    <div ref={ref} className="py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        {animatedText.map((word, index) => (
          <motion.span
            key={`word-${index}`} // Added a more descriptive key
            variants={wordVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Control animation
            custom={index}
            className="inline-block mr-2 text-white"
          >
            {word}
          </motion.span>
        ))}
        {/* THIS IS THE FIX: Added a unique key to this component */}
        <ColourfulText key="projects-word" text="Projects" isInView={isInView} />
      </h1>

     <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div>
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

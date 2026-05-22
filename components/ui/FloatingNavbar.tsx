"use client";
import React, { useState, memo, useCallback, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa6";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


const FloatingNavComponent = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = useCallback((current: number) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;
      setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
    }
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", handleScroll);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
        }}
        className={cn(
          "flex max-w-[95vw] sm:max-w-fit fixed top-10 inset-x-0 mx-auto border border-black/[0.1] dark:border-white/[0.1] rounded-full bg-white/70 dark:bg-[#000319]/70 backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 sm:pl-8 py-2 items-center justify-between sm:justify-center space-x-2 sm:space-x-4 overflow-x-auto overflow-y-hidden text-nowrap no-scrollbar",
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 text-neutral-800 items-center flex space-x-1 hover:text-neutral-500 dark:hover:text-neutral-300"
            )}
          >
            {navItem.icon && <span className="block sm:hidden">{navItem.icon}</span>}
            <span className="text-xs sm:text-sm">{navItem.name}</span>
          </a>
        ))}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors dark:text-white text-black"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>
        )}
        <button className="border text-xs sm:text-sm font-medium relative border-black/[0.2] dark:border-white/[0.2] text-black dark:text-white px-3 sm:px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <span>Resume</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export const FloatingNav = memo(FloatingNavComponent);

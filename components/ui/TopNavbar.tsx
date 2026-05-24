"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaEllipsisH, FaTimes } from "react-icons/fa";
import Link from "next/link";

export const TopNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = useCallback((current: number) => {
    if (typeof current === "number") {
      setIsScrolled(scrollYProgress.get() > 0.02);
    }
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", handleScroll);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 inset-x-0 w-full z-[5000] flex justify-center transition-all duration-300",
          isScrolled
            ? "bg-white/5 dark:bg-[#0d1117]/30 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-sm"
            : "bg-transparent border-transparent",
          className
        )}
      >
        <div className="flex items-center justify-between w-full max-w-7xl px-6 md:px-10 py-4">
          {/* Left Side: Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-full border border-stone-400 dark:border-stone-600 flex items-center justify-center">
              {/* Minimalist empty circle or logo goes here */}
            </div>
            <span className="font-bold tracking-[0.2em] text-xs sm:text-sm text-stone-900 dark:text-white uppercase hover:opacity-80 transition-opacity">
              Dhruv Soni
            </span>
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((navItem, idx) => (
              <a
                key={idx}
                href={navItem.link}
                className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                {navItem.name}
              </a>
            ))}
          </div>

          {/* Right Side: Theme Toggle, Resume & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-black/10 dark:border-white/20 text-xs sm:text-sm font-medium rounded-full text-stone-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              Resume
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-stone-800 dark:text-white"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-stone-800 dark:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaEllipsisH className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[4900] md:hidden bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Blurred color accents in the background */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 dark:bg-purple-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 dark:bg-blue-500/20 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col items-center space-y-8">
              {navItems.map((navItem, idx) => (
                <a
                  key={idx}
                  href={navItem.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-stone-900 dark:text-white hover:text-stone-500 transition-colors"
                >
                  {navItem.name}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-black/10 dark:border-white/20 text-lg font-medium rounded-full text-stone-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

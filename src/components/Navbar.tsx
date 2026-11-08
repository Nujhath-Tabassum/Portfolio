"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Dark mode toggle
  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);

    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      let currentSection = "#home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;

          if (scrollPosition >= sectionTop) {
            currentSection = link.href;
          }
        }
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        currentSection = "#contact";
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation click
  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex w-full justify-center px-4">
      <nav
        className={`relative flex h-[76px] w-full max-w-[1400px] items-center justify-between rounded-full border px-6 shadow-xl backdrop-blur-xl transition-colors duration-300 md:px-8 ${
          darkMode
            ? "border-white/10 bg-[#101525]/95"
            : "border-gray-200 bg-white/95"
        }`}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavClick("#home")}
          className={`shrink-0 text-2xl font-bold tracking-tight transition-colors duration-300 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative rounded-full px-3 py-2 text-[15px] font-medium transition-all duration-300 ${
                activeLink === link.href
                  ? "text-violet-500"
                  : darkMode
                    ? "text-gray-300 hover:text-violet-400"
                    : "text-gray-600 hover:text-violet-500"
              }`}
            >
              {link.name}

              {/* Active Underline */}
              <span
                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-violet-500 transition-all duration-300 ${
                  activeLink === link.href ? "w-5/6" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden items-center xl:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              darkMode
                ? "border-white/10 text-gray-300 hover:border-violet-500/50 hover:text-violet-400"
                : "border-gray-200 text-gray-700 hover:border-violet-500/50 hover:text-violet-600"
            }`}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              darkMode
                ? "border-white/10 text-gray-300 hover:text-violet-400"
                : "border-gray-200 text-gray-700 hover:text-violet-600"
            }`}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              darkMode
                ? "border-white/10 text-white hover:border-violet-500/50 hover:text-violet-400"
                : "border-gray-200 text-gray-800 hover:border-violet-500/50 hover:text-violet-600"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`absolute left-0 right-0 top-[88px] rounded-3xl border p-5 shadow-2xl backdrop-blur-xl xl:hidden ${
              darkMode
                ? "border-white/10 bg-[#101525]/98"
                : "border-gray-200 bg-white/98"
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`rounded-xl px-4 py-3 text-center text-sm font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? "bg-violet-500/15 text-violet-500"
                      : darkMode
                        ? "text-gray-300 hover:bg-white/5 hover:text-violet-400"
                        : "text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white px-5 py-8 dark:border-white/10 dark:bg-[#0b0b13]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5">

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Syeda Nujhath Tabassum<span className="text-violet-500">.</span>
        </h2>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Nujhath-Tabassum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition-colors hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400"
          >
            <FaGithub size={21} />
          </a>

          <a
            href="https://www.linkedin.com/in/syeda-nujhath-tabassum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition-colors hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400"
          >
            <FaLinkedinIn size={21} />
          </a>

          <a
            href="mailto:snujhathtabassum@gmail.com"
            aria-label="Email"
            className="text-gray-500 transition-colors hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400"
          >
            <Mail size={21} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-500">
          © {currentYear} Syeda Nujhath Tabassum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
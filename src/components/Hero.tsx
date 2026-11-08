"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Download,
  Code2,
  Sparkles,
  Mouse,
  GraduationCap,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] px-5 pb-24 pt-32 md:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-20 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="container relative z-10 mx-auto grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Intro Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="text-sm font-medium text-[var(--foreground)]">
              Welcome to my creative space
            </span>

            <Sparkles size={15} className="text-violet-500" />
          </div>

          {/* Introduction */}
          <p className="mb-3 text-lg font-medium tracking-wide text-[var(--muted)]">
            Hello there, I&apos;m
          </p>

          <h1 className="mb-7 text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl xl:text-7xl">
            Syeda Nujhath
            <span className="mt-2 block bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text pb-2 text-transparent">
              Tabassum.
            </span>
          </h1>

          {/* Professional Roles */}
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-base font-semibold text-[var(--foreground)] md:text-lg">
              Frontend Developer
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-base font-medium text-[var(--muted)] md:text-lg">
              CSE Student
            </span>
          </div>

          {/* Description */}
          <p className="mb-9 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
            I turn ideas into engaging digital experiences through thoughtful
            design and frontend development. I enjoy building responsive,
            accessible, and user-friendly web applications while continuously
            exploring new technologies and creative ways to solve problems.
          </p>

          {/* Action Buttons */}
          <div className="mb-11 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
            >
              <Download size={19} />
              Download Resume
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#projects"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-violet-500/30 px-6 py-3.5 font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Social Links */}
<div className="flex flex-wrap items-center gap-5">
  <span className="text-sm font-medium text-[var(--muted)]">
    Connect with me
  </span>

  <div className="h-px w-10 bg-violet-500/30" />

  {/* GitHub */}
  <a
    href="https://github.com/Nujhath-Tabassum"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--foreground)]/10 text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-500"
  >
    <FaGithub size={21} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/syeda-nujhath-tabassum"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--foreground)]/10 text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-500"
  >
    <FaLinkedinIn size={21} />
  </a>

  {/* Gmail */}
  <a
    href="mailto:snujhathtabassum@gmail.com"
    aria-label="Email"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--foreground)]/10 text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-500"
  >
    <Mail size={21} />
  </a>
</div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center py-12 lg:justify-end"
        >
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/25 to-blue-500/20 blur-[90px] md:h-[450px] md:w-[450px]" />

          {/* Decorative Circle */}
          <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-violet-500/20 md:h-[490px] md:w-[490px]" />

          <div className="relative h-[350px] w-[290px] sm:h-[420px] sm:w-[350px] lg:h-[470px] lg:w-[390px]">
            {/* Image Frame */}
            <div className="absolute -inset-3 rotate-3 rounded-[45px] border border-violet-500/30 transition-transform duration-700 hover:rotate-6" />

            <div className="absolute -inset-3 -rotate-3 rounded-[45px] border border-blue-500/20" />

            {/* Main Image */}
            <div className="relative h-full w-full overflow-hidden rounded-[38px] border border-violet-500/20 bg-[var(--secondary)] shadow-2xl shadow-violet-500/15">
              <Image
                src="/assets/Picture/Screenshot 2026-11-08 122352.png"
                alt="Syeda Nujhath Tabassum"
                fill
                priority
                sizes="(max-width: 768px) 290px, 390px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  Frontend Developer
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  Creative by nature.
                </p>
              </div>
            </div>

            {/* Floating Code Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-7 -top-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-[var(--background)] shadow-xl shadow-violet-500/10 sm:-right-9"
            >
              <Code2 size={30} className="text-violet-500" />
            </motion.div>

            {/* Creative Mind Card */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-8 top-[35%] rounded-2xl border border-violet-500/20 bg-[var(--background)] px-4 py-3 shadow-xl sm:-left-12"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
                  <Sparkles size={19} className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[var(--foreground)]">
                    Creative Mind
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    Ideas into reality
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -bottom-8 -right-5 rounded-2xl border border-violet-500/20 bg-[var(--background)] p-4 shadow-xl sm:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/10 p-2.5">
                  <GraduationCap size={25} className="text-violet-500" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[var(--foreground)]">
                    CSE Student
                  </p>

                  <p className="text-xs text-[var(--muted)]">
                    Learning & Growing
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--muted)] transition hover:text-violet-500 md:flex"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Mouse size={21} />
        </motion.div>

        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
      </a>
    </section>
  );
}
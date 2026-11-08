"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Heart,
  Sparkles,
  Gem,
  Palette,
  ShoppingBag,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[130px]" />

      <div className="container relative">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-violet-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
              About Me
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
            Where Creativity Meets
            <span className="block font-serif font-normal italic text-violet-500">
              Innovation.
            </span>
          </h2>
        </motion.div>

        {/* Introduction */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Introduction
            </p>

            <h3 className="mb-7 text-4xl font-bold leading-tight md:text-5xl">
              Syeda Nujhath
              <span className="block text-violet-500">
                Tabassum.
              </span>
            </h3>

            <p className="mb-6 text-xl font-medium leading-relaxed md:text-2xl">
              A Computer Science student with an interest in
              technology, design, and creative entrepreneurship.
            </p>

            <p className="mb-5 leading-8 text-[var(--muted)]">
              I am currently pursuing Computer Science and
              Engineering, with a particular interest in frontend
              development. I enjoy designing and developing
              responsive, accessible, and user-friendly web
              applications while continuously expanding my technical
              knowledge and problem-solving abilities.
            </p>

            <p className="mb-8 leading-8 text-[var(--muted)]">
              In addition to my academic and technical pursuits,
              I manage{" "}
              <span className="font-semibold text-violet-500">
                PebblePuff
              </span>
              , an online handmade accessories business specializing
              in beaded jewelry and handcrafted charms. This venture
              allows me to explore my creative interests while
              developing practical experience in entrepreneurship
              and business management.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-b border-violet-500 pb-2 font-semibold transition-all hover:gap-5 hover:text-violet-500"
            >
              Get in Touch
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Personal Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/15 bg-[var(--secondary)] p-8 md:p-10">

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-violet-500/20" />
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-violet-500/20" />

              <div className="relative">

                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Professional Overview
                  </span>
                  <Sparkles className="text-violet-500" size={22} />
                </div>

                <div className="space-y-9">

                  {/* Education */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
                      <GraduationCap size={23} />
                    </div>

                    <div>
                      <h4 className="mb-1 font-bold">
                        Academic Background
                      </h4>
                      <p className="text-sm leading-6 text-[var(--muted)]">
                        Pursuing Computer Science and Engineering
                        with a focus on developing strong technical
                        foundations.
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-violet-500/10" />

                  {/* Development */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
                      <Code2 size={23} />
                    </div>

                    <div>
                      <h4 className="mb-1 font-bold">
                        Frontend Development
                      </h4>
                      <p className="text-sm leading-6 text-[var(--muted)]">
                        Developing modern, responsive, and
                        user-centered web applications.
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-violet-500/10" />

                  {/* Creative Interests */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
                      <Heart size={23} />
                    </div>

                    <div>
                      <h4 className="mb-1 font-bold">
                        Creative Entrepreneurship
                      </h4>
                      <p className="text-sm leading-6 text-[var(--muted)]">
                        Combining creativity and business through
                        handmade product design and entrepreneurship.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-12 flex items-center justify-between rounded-2xl bg-violet-500/10 p-5">
                  <div>
                    <p className="text-sm font-semibold">
                      Driven by curiosity
                    </p>
                    <p className="text-sm text-violet-500">
                      Focused on continuous growth.
                    </p>
                  </div>

                  <Sparkles
                    size={30}
                    className="text-violet-500"
                  />
                </div>

              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-violet-500/15 bg-[var(--background)] px-5 py-4 shadow-xl sm:block">
              <p className="text-xs text-[var(--muted)]">
                Areas of interest
              </p>
              <p className="mt-1 font-semibold">
                Technology <span className="text-violet-500">+</span> Creativity
              </p>
            </div>
          </motion.div>
        </div>

        {/* PebblePuff Business Section */}
       {/* PebblePuff Business Section */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative mt-28 overflow-hidden rounded-3xl border border-violet-500/15 bg-[var(--secondary)] md:mt-36"
>
  <div className="grid lg:grid-cols-2">

    {/* Left: Brand Introduction */}
    <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">

      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-violet-500" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-500">
          Entrepreneurship
        </span>
      </div>

      <h3 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        PebblePuff
        <span className="mt-2 block font-serif text-2xl font-normal italic text-violet-500 md:text-3xl">
          Handmade with purpose.
        </span>
      </h3>

      <p className="mt-8 max-w-lg text-base leading-8 text-[var(--muted)]">
        PebblePuff is an online handmade accessories business
        founded and managed by me. It specializes in thoughtfully
        designed beaded jewelry and handcrafted charms, bringing
        together creativity, craftsmanship, and individual style.
      </p>

      <p className="mt-5 max-w-lg text-base leading-8 text-[var(--muted)]">
        Through PebblePuff, I manage product design and the
        creative aspects of an online business while developing
        my entrepreneurial and organizational skills.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <span className="rounded-full border border-violet-500/20 px-4 py-2 text-sm font-medium">
          Beaded Jewelry
        </span>

        <span className="rounded-full border border-violet-500/20 px-4 py-2 text-sm font-medium">
          Handmade Charms
        </span>
      </div>
    </div>

    {/* Right: Business Information */}
    <div className="relative flex items-center border-t border-violet-500/15 bg-violet-500/[0.035] p-8 md:p-14 lg:border-l lg:border-t-0">

      <div className="w-full">

        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Business Overview
          </span>

          <div className="mt-5 flex items-center justify-between">
            <h4 className="text-2xl font-bold">
              PebblePuff
            </h4>

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/20 text-violet-500">
              <Gem size={22} />
            </span>
          </div>

          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            An independent online brand focused on handmade
            accessories and creative product design.
          </p>
        </div>

        <div className="space-y-0">

          <div className="flex items-center justify-between border-t border-violet-500/15 py-6">
            <div>
              <p className="text-sm text-[var(--muted)]">
                Business Type
              </p>
              <p className="mt-1 font-semibold">
                Online Retail
              </p>
            </div>

            <ShoppingBag className="text-violet-500" size={21} />
          </div>

          <div className="flex items-center justify-between border-t border-violet-500/15 py-6">
            <div>
              <p className="text-sm text-[var(--muted)]">
                Product Category
              </p>
              <p className="mt-1 font-semibold">
                Handmade Accessories
              </p>
            </div>

            <Gem className="text-violet-500" size={21} />
          </div>

          <div className="flex items-center justify-between border-y border-violet-500/15 py-6">
            <div>
              <p className="text-sm text-[var(--muted)]">
                Core Focus
              </p>
              <p className="mt-1 font-semibold">
                Design & Craftsmanship
              </p>
            </div>

            <Heart className="text-violet-500" size={21} />
          </div>

        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-violet-500">
            Creativity. Craftsmanship. Entrepreneurship.
          </p>
        </div>

      </div>
    </div>
  </div>
</motion.section>

      </div>
    </section>
  );
};

export default About;
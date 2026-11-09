"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiOpenjdk,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import {
  FaShieldAlt,
  FaNetworkWired,
  FaPenNib,
  FaImage,
  FaPalette,
  FaCode,
} from "react-icons/fa";

import {
  Code2,
  Database,
  Terminal,
  Wrench,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Frontend Development",
    description: "Creating modern and responsive user interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Building APIs and working with server-side technologies.",
    icon: Database,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "currentColor" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JWT Authentication", icon: FaShieldAlt, color: "#E3B341" },
      { name: "REST API", icon: FaNetworkWired, color: "#8B5CF6" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Languages I use to practice programming and solve problems.",
    icon: Terminal,
    skills: [
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Tools that support my development and collaboration workflow.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "currentColor" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "currentColor" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
  {
    title: "Design & Creative Tools",
    description: "Exploring visual creativity and graphic design.",
    icon: Palette,
    skills: [
      { name: "Adobe Photoshop", icon: FaImage, color: "#31A8FF" },
      { name: "Adobe Illustrator", icon: FaPenNib, color: "#FF9A00" },
      { name: "Canva", icon: FaPalette, color: "#00C4CC" },
    ],
  },
];

// Animated skill counter
function SkillCounter({ total }: { total: number }) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (value) =>
    String(Math.round(value)).padStart(2, "0")
  );

  useEffect(() => {
    const controls = animate(count, total, {
      duration: 1.5,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, total]);

  return (
    <motion.span className="text-sm font-bold tabular-nums text-violet-500">
      {rounded}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden !bg-white px-5 py-16 transition-colors dark:!bg-[#0f0f17] sm:px-8 md:py-20 lg:px-12"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-violet-500">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            My Technical Expertise
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Skills & <span className="text-violet-500">Technologies.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
            A collection of technologies, programming languages, and creative
            tools I use to build meaningful digital experiences and continuously
            improve my development skills.
          </p>
        </motion.div>

        {/* Skills Overview */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-violet-500/20 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            05 Categories
          </span>

          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
            29 Skill Entries
          </span>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 !bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:!bg-[#151525] dark:hover:border-violet-500/40 sm:p-8"
              >
                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-500/5 blur-3xl transition-all duration-500 group-hover:bg-violet-500/10" />

                {/* Category Header */}
                <div className="relative mb-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                      <CategoryIcon size={23} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end">
                    <SkillCounter total={category.skills.length} />

                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Skills
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px w-full bg-gray-100 dark:bg-white/10" />

                {/* Skill Badges */}
                <div className="relative flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={`${category.title}-${skill.name}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.04,
                        }}
                        className="flex items-center gap-2.5 rounded-xl border border-gray-100 !bg-gray-50 px-3.5 py-2.5 transition-all duration-300 hover:border-violet-200 hover:!bg-violet-50 dark:border-white/10 dark:!bg-white/[0.03] dark:hover:border-violet-500/40 dark:hover:!bg-violet-500/10"
                      >
                        <Icon
                          size={18}
                          style={{ color: skill.color }}
                          className="shrink-0"
                        />

                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-violet-100 !bg-violet-50/50 px-6 py-5 dark:border-violet-500/15 dark:!bg-violet-500/5 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-500 dark:bg-violet-500/10">
              <Code2 size={21} />
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Always learning, always growing.
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Exploring new technologies and improving my skills.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400">
            Keep Exploring
            <ArrowUpRight size={18} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
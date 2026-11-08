"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

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

const categories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive, and interactive user interfaces.",
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
    description: "Working with server-side logic, APIs, and database management.",
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
    description: "Tools and platforms that support my development workflow.",
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
    description: "Exploring creativity through graphic design and visual editing.",
    skills: [
      { name: "Adobe Photoshop", icon: FaImage, color: "#31A8FF" },
      { name: "Adobe Illustrator", icon: FaPenNib, color: "#FF9A00" },
      { name: "Canva", icon: FaPalette, color: "#00C4CC" },
    ],
  },
];

// Animated counter for each category
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
    <motion.span className="shrink-0 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm font-bold text-violet-500">
      {rounded}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative  overflow-hidden py-16 md:py-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="container relative mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            ✦ My Technical Expertise
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Skills & <span className="text-violet-500">Technologies.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Technologies, programming languages, and creative tools I explore
            and use to turn ideas into meaningful digital experiences.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-violet-500/15 bg-[var(--secondary)]/40 p-6 transition-all duration-300 hover:border-violet-500/35 hover:shadow-xl hover:shadow-violet-500/5 sm:p-8"
            >
              {/* Category Heading + Skill Counter */}
              <div className="mb-8 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {category.description}
                  </p>
                </div>

                <SkillCounter total={category.skills.length} />
              </div>

              {/* Individual Skill Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.05,
                      }}
                      className="group/skill flex min-h-[110px] flex-col items-center justify-center gap-3 rounded-xl border border-violet-500/10 bg-[var(--background)] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10"
                    >
                      <Icon
                        size={30}
                        style={{ color: skill.color }}
                        className="shrink-0 transition-transform duration-300 group-hover/skill:scale-110"
                      />

                      <span className="text-sm font-semibold">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Sparkles,
  Palette,
  Package,
  Users,
  Lightbulb,
} from "lucide-react";

const experienceData = [
  {
    position: "Founder & Owner",
    company: "PebblePuff",
    employmentType: "Self-employed",
    duration: "Present",
    location: "Sylhet, Bangladesh",
    description:
      "Founded and manage PebblePuff, a handmade accessories business specializing in beaded jewelry and handcrafted charms. Responsible for creating unique products, managing business activities, and connecting with customers.",
    responsibilities: [
      "Design and create handmade beaded jewelry and handcrafted charms.",
      "Manage product development and creative ideas.",
      "Handle customer communication and product inquiries.",
      "Manage business activities and product presentation.",
    ],
    skills: [
      "Entrepreneurship",
      "Product Design",
      "Creativity",
      "Business Management",
      "Customer Communication",
    ],
  },
];

const highlights = [
  {
    icon: Palette,
    title: "Product Design",
    description: "Creating unique handmade accessories.",
  },
  {
    icon: Package,
    title: "Business Management",
    description: "Managing products and business activities.",
  },
  {
    icon: Users,
    title: "Customer Relations",
    description: "Communicating with customers and handling inquiries.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Developing creative ideas and product concepts.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-16 transition-colors duration-300 md:py-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-violet-200/30 blur-[120px] dark:bg-violet-500/10" />

      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-[120px] dark:bg-blue-500/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-semibold text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
            My Professional Journey
          </span>

          <h2 className="text-3xl font-bold text-[var(--foreground)] md:text-5xl">
            My <span className="text-violet-600 dark:text-violet-400">Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
            My journey of learning, creativity, and building practical
            experience through entrepreneurship and personal initiatives.
          </p>
        </motion.div>

        {/* Experience Card */}
        <div className="mx-auto max-w-4xl">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 dark:border-white/10 dark:bg-[#151525] dark:hover:border-violet-500/40 dark:hover:shadow-violet-500/5 md:p-9"
            >
              {/* Header */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                    <BriefcaseBusiness size={27} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400 md:text-2xl">
                      {experience.position}
                    </h3>

                    <p className="mt-1 text-lg font-semibold text-violet-600 dark:text-violet-400">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {experience.employmentType}
                    </p>
                  </div>
                </div>

                <span className="w-fit rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-600 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
                  Ongoing
                </span>
              </div>

              {/* Details */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <CalendarDays
                    size={16}
                    className="text-violet-500 dark:text-violet-400"
                  />
                  {experience.duration}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="text-violet-500 dark:text-violet-400"
                  />
                  {experience.location}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mt-8">
                <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
                  <Sparkles size={18} className="text-violet-500" />
                  Key Responsibilities
                </h4>

                <div className="space-y-3">
                  {experience.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />

                      <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8 border-t border-gray-100 pt-6 dark:border-white/10">
                <h4 className="mb-4 text-base font-bold text-gray-900 dark:text-white">
                  Skills & Expertise
                </h4>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-100 bg-violet-50/70 px-4 py-2 text-xs font-semibold text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md dark:border-white/10 dark:bg-[#151525]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <Icon size={22} />
                </div>

                <h4 className="font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  MapPin,
  CalendarDays,
  Award,
} from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    shortDegree: "B.Sc. in CSE",
    institution: "Metropolitan University",
    location: "Sylhet, Bangladesh",
    duration: "2024 – Present",
    result: "3.63 / 4.00",
    resultLabel: "Current CGPA",
    status: "Currently Studying",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science & Engineering. I am in my 4th year, developing my knowledge of programming, software development, and modern technologies.",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Higher Secondary Certificate",
    shortDegree: "HSC",
    institution: "Higher Secondary Education",
    location: "Sylhet, Bangladesh",
    duration: "2022",
    result: "4.75 / 5.00",
    resultLabel: "GPA",
    status: "Completed",
    description:
      "Successfully completed my Higher Secondary Certificate with a strong academic foundation.",
    icon: BookOpen,
    current: false,
  },
  {
    degree: "Secondary School Certificate",
    shortDegree: "SSC",
    institution: "Secondary School Education",
    location: "Sylhet, Bangladesh",
    duration: "2022",
    result: "4.72 / 5.00",
    resultLabel: "GPA",
    status: "Completed",
    description:
      "Completed my Secondary School Certificate, building the foundation for my academic journey.",
    icon: School,
    current: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white py-16 transition-colors duration-300 dark:bg-transparent md:py-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-violet-200/30 blur-[120px] dark:bg-violet-500/10" />

      <div className="pointer-events-none absolute bottom-10 right-0 -z-0 h-72 w-72 rounded-full bg-blue-200/30 blur-[120px] dark:bg-blue-500/10" />

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
            My Academic Background
          </span>

          <h2 className="text-3xl font-bold text-[var(--foreground)] md:text-5xl">
            My <span className="text-violet-600 dark:text-violet-400">Education</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
            My academic journey reflects my commitment to learning,
            personal growth, and building a strong foundation in technology.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute bottom-10 left-[23px] top-10 hidden w-px bg-gradient-to-b from-violet-300 via-violet-200 to-transparent dark:from-violet-500 dark:via-violet-500/40 md:block" />

          <div className="space-y-8">
            {educationData.map((education, index) => {
              const Icon = education.icon;

              return (
                <motion.div
                  key={education.shortDegree}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="relative md:pl-16"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-violet-200 !bg-white text-violet-600 shadow-md shadow-violet-100 dark:border-violet-500/30 dark:!bg-[#151525] dark:text-violet-400 dark:shadow-violet-500/10 md:flex">
                    <Icon size={22} />
                  </div>

                  {/* Education Card */}
                  <div className="group rounded-3xl border border-gray-100 !bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 dark:border-white/10 dark:!bg-[#151525] dark:hover:border-violet-500/40 dark:hover:shadow-xl dark:hover:shadow-violet-500/5 md:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      {/* Left Content */}
                      <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          {/* Degree Badge */}
                          <span className="rounded-full border border-violet-100 bg-violet-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
                            {education.shortDegree}
                          </span>

                          {/* Status Badge */}
                          <span
                            className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                              education.current
                                ? "border-green-200 bg-green-50 text-green-600 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400"
                                : "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                            }`}
                          >
                            {education.status}
                          </span>
                        </div>

                        {/* Degree */}
                        <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400 md:text-2xl">
                          {education.degree}
                        </h3>

                        {/* Institution */}
                        <p className="mt-3 text-base font-semibold text-violet-600 dark:text-violet-400">
                          {education.institution}
                        </p>

                        {/* Location and Duration */}
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-2">
                            <MapPin
                              size={16}
                              className="text-violet-500 dark:text-violet-400"
                            />
                            {education.location}
                          </span>

                          <span className="flex items-center gap-2">
                            <CalendarDays
                              size={16}
                              className="text-violet-500 dark:text-violet-400"
                            />
                            {education.duration}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-5 text-sm leading-7 text-gray-500 dark:text-gray-400">
                          {education.description}
                        </p>
                      </div>

                      {/* Result Card */}
                      <div className="flex min-w-[145px] flex-row items-center gap-4 rounded-2xl border border-violet-100 !bg-violet-50/40 p-4 sm:flex-col sm:items-center sm:justify-center sm:gap-2 sm:py-6 dark:border-violet-500/15 dark:!bg-violet-500/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl !bg-white text-violet-600 shadow-sm dark:!bg-violet-500/10 dark:text-violet-400">
                          <Award size={22} />
                        </div>

                        <div className="sm:text-center">
                          <p className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">
                            {education.result}
                          </p>

                          <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                            {education.resultLabel}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
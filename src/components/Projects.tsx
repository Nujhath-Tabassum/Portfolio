"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  ShoppingBasket,
  Layers3,
  Dumbbell,
  Server,
  HeartHandshake,
  Code2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import { projects } from "@/data/projects";

const projectIcons = [
  ShoppingBasket,
  Layers3,
  Dumbbell,
  Server,
  HeartHandshake,
];

const projectGradients = [
  "from-emerald-500/20 via-green-500/10 to-teal-500/20",
  "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
  "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
  "from-orange-500/20 via-amber-500/10 to-red-500/20",
  "from-pink-500/20 via-rose-500/10 to-purple-500/20",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-5 py-16 transition-colors dark:bg-[#0f0f17] sm:px-8 md:py-20 lg:px-12"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-block rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-semibold text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
            What I've Built
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="text-violet-600 dark:text-violet-400">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
            Explore some of the projects I've developed, the technologies
            I've worked with, and the experiences I've gained along the way.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = projectIcons[index % projectIcons.length];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl dark:border-white/10 dark:bg-[#151525] dark:hover:border-violet-500/40"
              >
                {/* Project Details Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-1 flex-col"
                >
                  {/* Project Preview */}
                  <div
                    className={`relative h-56 overflow-hidden bg-gradient-to-br ${projectGradients[index % projectGradients.length]}`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={index === 0}
                      />
                    ) : (
                      <>
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-violet-500/10" />

                        <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full border border-violet-500/10" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/50 bg-white/70 text-violet-600 shadow-xl backdrop-blur-xl transition duration-500 group-hover:scale-110 dark:border-white/10 dark:bg-[#17172a]/80 dark:text-violet-400">
                            <Icon size={45} strokeWidth={1.5} />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Image Overlay */}
                    {project.image && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                    )}

                    {/* Project Number */}
                    <span className="absolute left-6 top-5 text-sm font-bold tracking-widest text-gray-500/70 dark:text-white/70">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Status */}
                    <span className="absolute right-5 top-5 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/40 dark:text-white">
                      {project.status}
                    </span>

                    {/* Hover Icon */}
                    <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      <ArrowUpRight size={21} />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    {/* Category */}
                    <p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                      {project.category}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
                        >
                          {technology}
                        </span>
                      ))}

                      {project.technologies.length > 4 && (
                        <span className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Card Actions */}
                <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-6 py-5 dark:border-white/10 sm:px-7">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold text-violet-600 transition-all hover:gap-3 dark:text-violet-400"
                  >
                    View Details
                    <ArrowUpRight size={17} />
                  </Link>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/20 transition-all hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-500 dark:bg-white/5 dark:text-gray-400">
                      <FaGithub size={16} />
                      Source Code
                    </span>
                  )}
                </div>
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
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
            <Code2 size={18} className="text-violet-500" />
            Always learning, building, and exploring new ideas.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
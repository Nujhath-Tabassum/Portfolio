import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Globe,
  Code2,
  Lightbulb,
  Target,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
export const instant = false;
import { projects } from "@/data/projects";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0f0f17] dark:text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:text-gray-300 dark:hover:text-violet-400"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        {/* Project Hero */}
        <section className="grid items-center gap-12 lg:grid-cols-2">
          {/* Project Information */}
          <div>
            <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
              {project.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <h2 className="mt-4 text-xl font-semibold text-violet-600 dark:text-violet-400 sm:text-2xl">
              {project.subtitle}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Project Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-700"
                >
                  <Globe size={18} />
                  Live Website
                  <ArrowUpRight size={17} />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-800 transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 dark:border-white/20 dark:text-white dark:hover:text-violet-400"
              >
                <FaGithub size={19} />
                GitHub Repository
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Project Preview */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-purple-500/20 blur-2xl" />

            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 shadow-2xl dark:border-white/10 dark:from-[#211a38] dark:via-[#171529] dark:to-[#101525]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="px-6 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/80 text-violet-600 shadow-xl dark:bg-white/10 dark:text-violet-400">
                    <Code2 size={48} />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Project Preview
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <Code2 size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Technologies Used
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Tools and technologies used to build this project.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-violet-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* About Project */}
        <section className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <BookOpen size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                About the Project
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Understanding the idea behind the application.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 leading-8 text-gray-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 sm:p-10">
            {project.description}
          </div>
        </section>

        {/* Key Features */}
        <section className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <Target size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Key Features
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                What makes this project useful.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/40"
              >
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-violet-600 dark:text-violet-400"
                />

                <p className="leading-7 text-gray-700 dark:text-gray-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <Lightbulb size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Challenges & Solutions
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Some technical challenges and how they were approached.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {project.challenges.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-7 dark:border-white/10 dark:bg-white/[0.03] sm:p-9"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-bold">Challenge</h3>
                </div>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  {item.challenge}
                </p>

                <div className="mt-6 border-l-2 border-violet-500 pl-5">
                  <h4 className="font-bold text-violet-600 dark:text-violet-400">
                    Solution
                  </h4>

                  <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <Lightbulb size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                What I Learned
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Knowledge and skills gained during development.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
            <div className="space-y-5">
              {project.learnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-violet-600 dark:text-violet-400"
                  />

                  <p className="leading-7 text-gray-600 dark:text-gray-400">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Project Links */}
        <section className="mt-24 rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 text-center dark:border-violet-500/20 dark:from-violet-500/10 dark:to-purple-500/5 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Interested in this project?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            Explore the live application or check out the source code to learn
            more about how it was built.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-700"
              >
                <Globe size={18} />
                Visit Live Website
                <ExternalLink size={16} />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-800 transition hover:-translate-y-1 hover:border-violet-500 dark:border-white/20 dark:text-white"
            >
              <FaGithub size={19} />
              View Source Code
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        {/* Back to Projects */}
        <div className="mt-12 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-semibold text-violet-600 transition hover:gap-3 dark:text-violet-400"
          >
            <ArrowLeft size={18} />
            Explore More Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  CalendarDays,
  GraduationCap,
  X,
  ZoomIn,
} from "lucide-react";

interface Certificate {
  title: string;
  organization: string;
  date: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "সহজ ভাষায় C Programming",
    organization: "10 Minute School",
    date: "Jan 2026",
    category: "Programming",
    image: "/assets/certificates/C.JPEG",
    description:
      "Successfully completed the সহজ ভাষায় C Programming course. Developed foundational knowledge of C programming, including programming fundamentals, logical thinking, problem-solving, and writing structured code.",
    link: "https://www.linkedin.com/in/syeda-nujhath-tabassum/overlay/Certifications/840532563/treasury/?profileId=ACoAAGmICUcB6HGaWHQLBoKCKLnCWd8apHHbmeo",
  },
  {
    title: "Graphic Designing with Photoshop",
    organization: "10 Minute School",
    date: "Mar 2026",
    category: "Graphic Design",
    image: "/assets/certificates/Photoshop.JPEG",
    description:
      "Successfully completed the Graphic Designing with Photoshop course. Gained practical knowledge of Photoshop fundamentals, image manipulation, advanced editing tools, creative color management, blending effects, and mockup creation.",
    link: "https://www.linkedin.com/in/syeda-nujhath-tabassum/overlay/Certifications/840426607/treasury/?profileId=ACoAAGmICUcB6HGaWHQLBoKCKLnCWd8apHHbmeo",
  },
  {
    title: "How to Make a CV Good to Great!",
    organization:
      "Department of Business Administration, Metropolitan University",
    date: "Participation Certificate",
    category: "Professional Development",
    image: "/assets/certificates/CV.JPEG",
    description:
      'Successfully participated in the workshop "How to Make a CV Good to Great!". Gained valuable insights into CV preparation, professional presentation, and highlighting academic achievements, skills, and experiences.',
    link: "https://www.linkedin.com/in/syeda-nujhath-tabassum/overlay/Certifications/840092925/treasury/?profileId=ACoAAGmICUcB6HGaWHQLBoKCKLnCWd8apHHbmeo",
  },
  {
    title: "LURS 3rd Student Research Conference 2026",
    organization: "Leading University Research Society (LURS)",
    date: "Aug 2026",
    category: "Research",
    image: "/assets/certificates/LURS.JPEG",
    description:
      'Received a Certificate of Participation for attending the conference on August 1, 2026. The theme was "Turning Ideas into Sustainable Solutions for a Better Tomorrow", focusing on research, innovation, and sustainable development.',
    link: "https://www.linkedin.com/in/syeda-nujhath-tabassum/overlay/Certifications/839964245/treasury/?profileId=ACoAAGmICUcB6HGaWHQLBoKCKLnCWd8apHHbmeo",
  },
  {
    title: "Assistant Publicity Director – Eye & Dental Camp",
    organization: "Metropolitan University Social Services Club (MUSSC)",
    date: "Sep 2026",
    category: "Leadership & Volunteering",
    image: "/assets/certificates/MUSSC.JPEG",
    description:
      "Received a Certificate of Appreciation for serving as Assistant Publicity Director at the Eye & Dental Camp organized by Metropolitan University Social Services Club.",
    link: "https://www.linkedin.com/in/syeda-nujhath-tabassum/overlay/Certifications/839761731/treasury/?profileId=ACoAAGmICUcB6HGaWHQLBoKCKLnCWd8apHHbmeo",
  },
  {
    title: "English Language Camp",
    organization: "Metropolitan University",
    date: "Feb 2024",
    category: "Communication",
    image: "/assets/certificates/English_Camp.JPEG",
    description:
      "Successfully completed a one-month English Language Camp organized by Metropolitan University, Sylhet, from 28 January 2024 to 27 February 2024. Participated in activities designed to improve English language proficiency, communication skills, and confidence in using English.",
    link: "https://www.linkedin.com/in/syeda-nujhath-tabassum/overlay/Certifications/1007442105/treasury/?profileId=ACoAAGmICUcB6HGaWHQLBoKCKLnCWd8apHHbmeo",
  },
  {
    title: "Graphic Design",
    organization: "Sylhet IT Academy",
    date: "Sep 2021",
    category: "Graphic Design",
    image: "/assets/certificates/Graphics.JPEG",
    description:
      "Successfully completed a Graphic Design training course at Sylhet IT Academy. Gained foundational knowledge and practical skills in graphic design, including visual communication, creative design concepts, and digital design techniques.",
    link: "https://www.linkedin.com/in/syeda-nujhath-tabassum/overlay/Certifications/1007301459/treasury/?profileId=ACoAAGmICUcB6HGaWHQLBoKCKLnCWd8apHHbmeo",
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close image preview with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when preview is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="certificates"
        className="relative overflow-hidden bg-white px-5 py-16 dark:bg-[#0f0f17] md:px-10 md:py-20"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300">
              <Award size={17} />
              My Achievements
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Certificates &{" "}
              <span className="text-violet-600 dark:text-violet-400">
                Achievements
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              A collection of my certifications, workshops, training
              programs, and learning experiences.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-[#151525]"
              >
                {/* Certificate Image */}
                <div
                  onClick={() => setSelectedImage(certificate.image)}
                  className="relative flex h-52 cursor-zoom-in items-center justify-center overflow-hidden bg-gray-100 p-4 dark:bg-[#202033]"
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Zoom overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
                    <div className="scale-75 rounded-full bg-white/90 p-3 text-violet-600 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <ZoomIn size={25} />
                    </div>
                  </div>

                  {/* Category */}
                  <span className="absolute right-3 top-3 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {certificate.category}
                  </span>
                </div>

                {/* Certificate Information */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400">
                    <GraduationCap size={17} />
                    <span>{certificate.organization}</span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                    {certificate.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarDays size={16} />
                    <span>{certificate.date}</span>
                  </div>

                  <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {certificate.description}
                  </p>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-5 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-600 hover:text-white dark:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-violet-600 dark:hover:text-white"
                  >
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            Always learning, growing, and exploring new opportunities.
          </p>
        </div>
      </section>

      {/* Full-Screen Certificate Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
          >
            <X size={28} />
          </button>

          {/* Large Image */}
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt="Certificate preview"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
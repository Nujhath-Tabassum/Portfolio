"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Me",
    value: "snujhathtabassum@gmail.com",
    href: "mailto:snujhathtabassum@gmail.com",
    color: "text-violet-600",
    bg: "bg-violet-100 dark:bg-violet-500/10",
  },
  {
    icon: Phone,
    title: "Call Me",
    value: "+880 1713-848789",
    href: "tel:+8801713848789",
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+880 1713-848789",
    href: "https://wa.me/8801713848789",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-500/10",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Hello Syeda Nujhath Tabassum,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:snujhathtabassum@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-16 dark:bg-[#0f0f17] md:px-10 md:py-20"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300">
            <Mail size={17} />
            Get In Touch
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Let&apos;s Work{" "}
            <span className="text-violet-600 dark:text-violet-400">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Have a project in mind, a question, or just want to say hello?
            I&apos;d love to hear from you. Feel free to get in touch!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Let&apos;s Connect
            </h3>

            <p className="mb-8 leading-7 text-gray-600 dark:text-gray-400">
              I&apos;m always open to discussing new opportunities, creative
              projects, collaborations, and interesting ideas. Choose
              your preferred way to reach me.
            </p>

            <div className="space-y-5">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.title === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      item.title === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-white/10 dark:bg-[#151525] dark:hover:border-violet-500/40"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
                    >
                      <Icon size={25} className={item.color} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 break-all text-sm text-gray-500 dark:text-gray-400">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-gray-400 transition group-hover:text-violet-600"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-7 flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin size={20} className="text-violet-500" />
              <span>Sylhet, Bangladesh</span>
            </div>

           
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-violet-500/5 dark:border-white/10 dark:bg-[#151525] md:p-8"
          >
            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <p className="mb-7 text-sm text-gray-500 dark:text-gray-400">
              Fill out the form below and I&apos;ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#202033] dark:text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#202033] dark:text-white"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#202033] dark:text-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#202033] dark:text-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                Send Message
                <Send size={19} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
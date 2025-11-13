// components/ProgramsEnhancedSection.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Leaf } from "lucide-react";

const items = [
  {
    title: "Education",
    blurb:
      "Ensure every child has the best possible start in life by providing support and empowerment to reach their full potential.",
    icon: <BookOpen className="w-7 h-7 text-green-600" />,
  },
  {
    title: "Community Care",
    blurb:
      "Uplifting communities through volunteer programs, skills development, and compassionate support for the elderly and those in need.",
    icon: <Users className="w-7 h-7 text-green-600" />,
  },
  {
    title: "Environment",
    blurb:
      "Promoting environmental responsibility through tree planting, community cleanups, and awareness campaigns for a greener future.",
    icon: <Leaf className="w-7 h-7 text-green-600" />,
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative py-20 sm:py-24 bg-linear-to-b from-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <span className="text-sm sm:text-base font-semibold text-lime-600 uppercase mb-2 inline-block">
          Services
        </span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
        >
          What We Do
        </motion.h3>
        <p className="text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          We are committed to building a better tomorrow through education,
          empowerment, and environmental action.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 text-center sm:text-left hover:shadow-lg hover:border-green-200 transition-all duration-300"
            >
              <div className="flex items-center justify-center sm:justify-start mb-5">
                <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl">
                  {it.icon}
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {it.title}
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {it.blurb}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-16">
          <Link
            href="/programs"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white rounded-full font-semibold shadow-md hover:bg-green-700 transition-all duration-300 text-sm sm:text-base"
          >
            Explore All Programs
          </Link>
        </div>
      </div>

      {/* Decorative background orbs */}
      <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}

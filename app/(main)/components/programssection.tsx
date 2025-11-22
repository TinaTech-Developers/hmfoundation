// components/ProgramsEnhancedSection.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Leaf, ArrowRight } from "lucide-react";
import { FaChild } from "react-icons/fa";
import { MdElderly } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";

const items = [
  {
    title: "Children",
    blurb:
      "Empowering children to reach their full potential by providing quality education, mentorship, and essential learning resources.",
    icon: <FaChild className="w-7 h-7 text-green-600" />,
  },
  {
    title: "Elderly",
    blurb:
      "Supporting communities through volunteer initiatives, skills development, and care programs for the elderly and vulnerable.",
    icon: <MdElderly className="w-7 h-7 text-green-600" />,
  },
  {
    title: "Community",
    blurb:
      "Promoting sustainability through tree planting, community cleanups, and awareness campaigns for a healthier planet.",
    icon: <BsPeople className="w-7 h-7 text-green-600" />,
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        {/* <span className="text-sm sm:text-base font-semibold text-lime-600 uppercase mb-2 inline-block">
          Our Projects
        </span> */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:my-8 font-bold text-gray-900 mb-3"
        >
          Our Projects
        </motion.h3>
        {/* <p className="text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          We are dedicated to creating a brighter future through education,
          community support, and environmental stewardship.
        </p> */}

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="bg-white flex flex-col items-center rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 text-center sm:text-left hover:shadow-lg hover:border-green-200 transition-all duration-300"
            >
              <div className="flex items-center justify-center sm:justify-start mb-5">
                <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h4>
              {/* <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {item.blurb}
              </p> */}
              <Link
                href={"/programs"}
                className="flex items-center justify-center gap-2 text-sm text-green-600 hover:text-green-900"
              >
                Read More
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-14 sm:mt-16">
          <Link
            href="/programs"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white rounded-full font-semibold shadow-md hover:bg-green-700 transition-all duration-300 text-sm sm:text-base"
          >
            Explore All Programs
          </Link>
        </div>
      </div>

      {/* Decorative Background Orbs */}
      <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}

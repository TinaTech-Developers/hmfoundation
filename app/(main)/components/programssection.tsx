// components/ProgramsEnhancedSection.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Leaf, ArrowRight } from "lucide-react";
import { FaChild } from "react-icons/fa";
import { MdElderly } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import Image from "next/image";
import { image } from "framer-motion/client";

const items = [
  {
    title: "Children",
    blurb:
      "Empowering children to reach their full potential by providing quality education, mentorship, and essential learning resources.",
    icon: <FaChild className="w-7 h-7 text-[#A7CE44]-600" />,
    imageUrl: "https://dch.org.za/wp-content/uploads/2019/05/Untitled-20-2.jpg",
  },
  {
    title: "Elderly",
    blurb:
      "Supporting communities through volunteer initiatives, skills development, and care programs for the elderly and vulnerable.",
    icon: <MdElderly className="w-7 h-7 text-[#A7CE44]-600" />,
    imageUrl:
      "/lifestyle-scene-from-community-showing-care-support-from-people.jpg",
  },
  {
    title: "Community",
    blurb:
      "Promoting sustainability through tree planting, community cleanups, and awareness campaigns for a healthier planet.",
    icon: <BsPeople className="w-7 h-7 text-[#A7CE44]-600" />,
    imageUrl:
      "/group-happy-african-volunteers-planting-tree-park-africa-volunteering-charity-people-ecology-concept.jpg",
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative py-20 sm:py-24 bg-linear-to-b from-white to-lime-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        {/* <span className="text-sm sm:text-base font-semibold text-[#A7CE44]-600 uppercase mb-2 inline-block">
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
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center justify-center relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl shadow-[#A7CE44]-600 transition-all duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {/* <p className="text-gray-700 text-sm">{project.description}</p> */}
              </div>
              <Link
                href={"/programs"}
                className="flex my-10 items-center justify-center p-2 hover:bg-[#A7CE44] hover:text-white gap-2 text-sm text-[#A7CE44] border border-[#A7CE44] w-28"
              >
                Read More
                <ArrowRight size={15} />
              </Link>
              {/* Centered [#A7CE44] Line (80% width) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-[#A7CE44]-600 "></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-14 sm:mt-16">
          <Link
            href="/programs"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#A7CE44] text-white rounded-full font-semibold shadow-md hover:bg-[#A7CE44] transition-all duration-300 text-sm sm:text-base"
          >
            Explore All Programs
          </Link>
        </div>
      </div>

      {/* Decorative Background Orbs */}
      <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-[#A7CE44]-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#A7CE44]-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}

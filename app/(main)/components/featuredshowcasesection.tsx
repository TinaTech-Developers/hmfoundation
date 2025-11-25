"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Showcase {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  cta?: string;
}

const showcases: Showcase[] = [
  {
    id: 1,
    title: "Nurturing Children Through Education",
    description:
      "Providing learning resources, mentorship, and access to quality education to help children reach their full potential.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C5612AQFIJpwWxvLeGw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1556633128798?e=2147483647&v=beta&t=NDjSd_qqRgF5GMy2LfCRfDY68JOq8g98BwxaruY9IMk",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Caring for the Elderly",
    description:
      "Offering compassionate care that addresses physical, emotional, and social needs of elderly community members.",
    imageUrl:
      "https://kefihealthcare.com/wp-content/uploads/2022/10/elderly-care-facilities.jpeg",
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Community Engagement & Support",
    description:
      "Strengthening communities through volunteer programs, skill-building, and environmental cleanups to create a more inclusive and supportive society.",
    imageUrl: "/hands-holding-each-other-support.jpg",
    cta: "Join Us",
  },
];

export default function FeaturedShowcaseSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base font-semibold text-[#A7CE44]-600 uppercase mb-2 inline-block"
          >
            Highlights
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Featured Initiatives
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-700 max-w-2xl mx-auto"
          >
            Empowering lives, enriching communities. Our mission is to nurture
            children, care for the elderly, and strengthen communities through
            compassion, faith, and the generosity of our supporters.
          </motion.p>
        </div>

        {/* Showcase Cards */}
        <div className="space-y-20 md:space-y-24">
          {showcases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-8 md:gap-12`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-60 sm:h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-2 sm:px-0">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                  {item.description}
                </p>

                {item.cta && (
                  <div className="flex justify-center md:justify-start">
                    <a
                      href="#"
                      className="inline-block px-6 sm:px-8 py-2.5 bg-[#A7CE44]-600 text-white rounded-full font-medium text-sm sm:text-base hover:bg-[#A7CE44]-700 transition shadow-md"
                    >
                      {item.cta}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-16 -left-16 w-48 sm:w-64 h-48 sm:h-64 bg-[#A7CE44]-100 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute -bottom-16 -right-16 w-48 sm:w-64 h-48 sm:h-64 bg-[#A7CE44]-200 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}

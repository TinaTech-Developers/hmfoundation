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
    title: "Empowering Children Through Education",
    description:
      "We provide learning resources, teacher support, and access to schools for children in underserved communities.",
    imageUrl: "/empowering_communities.png",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Clean Water Projects",
    description:
      "Building sustainable clean water systems to improve health and well-being in rural communities.",
    imageUrl:
      "https://www.wvi.org/sites/default/files/2022-03/D200-0913-105.jpg",
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Women Empowerment Programs",
    description:
      "Training and supporting women with skills and resources to achieve financial independence.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/diversity-women-s-empowerment-hands-color-working-together-women-different-backgrounds-create-hand-mandalas-diversity-wins-135073837.jpg",
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
            className="text-sm sm:text-base font-semibold text-lime-600 uppercase mb-2 inline-block"
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
                      className="inline-block px-6 sm:px-8 py-2.5 bg-lime-600 text-white rounded-full font-medium text-sm sm:text-base hover:bg-lime-700 transition shadow-md"
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
      <div className="absolute -top-16 -left-16 w-48 sm:w-64 h-48 sm:h-64 bg-lime-100 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute -bottom-16 -right-16 w-48 sm:w-64 h-48 sm:h-64 bg-lime-200 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}

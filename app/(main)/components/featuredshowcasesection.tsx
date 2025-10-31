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
    imageUrl: "/images/projects/water.jpg",
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Women Empowerment Programs",
    description:
      "Training and supporting women with skills and resources to achieve financial independence.",
    imageUrl: "/images/projects/women.jpg",
    cta: "Join Us",
  },
];

export default function FeaturedShowcaseSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
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
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Featured Initiatives
          </motion.h3>
        </div>

        {/* Showcase Cards */}
        <div className="space-y-16">
          {showcases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-center md:items-stretch  h-96 gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-96 sm:h-80 md:h-auto rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-6">{item.description}</p>
                {item.cta && (
                  <a
                    href="#"
                    className="inline-block px-6 py-2 bg-lime-600 w-1/4 text-center text-white rounded-full font-medium hover:bg-lime-700 transition"
                  >
                    {item.cta}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-lime-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-lime-200 rounded-full blur-3xl opacity-15"></div>
    </section>
  );
}

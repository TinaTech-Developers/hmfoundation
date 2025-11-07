"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Clean Water Project",
    description: "Providing safe water to communities in need.",
    imageUrl:
      "https://www.wvi.org/sites/default/files/2022-03/D200-0913-105.jpg",
  },
  {
    id: 2,
    title: "Education for All",
    description:
      "Supporting children’s education with resources and scholarships.",
    imageUrl: "/education.jpg",
  },
  {
    id: 3,
    title: "Women Empowerment",
    description:
      "Skills and training for women to achieve economic independence.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/diversity-women-s-empowerment-hands-color-working-together-women-different-backgrounds-create-hand-mandalas-diversity-wins-135073837.jpg",
  },
];

export default function FeaturedShowcaseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-lime-600 font-semibold tracking-wide uppercase text-sm">
            Featured Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Projects Making a Difference
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each initiative represents our commitment to sustainable impact —
            bringing education, empowerment, and hope to communities across
            Zimbabwe.
          </p>
          <div className="mx-auto mt-4 w-20 h-1 bg-lime-600 rounded-full"></div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl shadow-lime-600 transition-all duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
              {/* Centered Green Line (80% width) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-lime-600 "></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

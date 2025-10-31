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
    imageUrl: "/images/projects/water.jpg",
  },
  {
    id: 2,
    title: "Education for All",
    description:
      "Supporting children’s education with resources and scholarships.",
    imageUrl: "/images/projects/education.jpg",
  },
  {
    id: 3,
    title: "Women Empowerment",
    description:
      "Skills and training for women to achieve economic independence.",
    imageUrl: "/images/projects/women.jpg",
  },
];

export default function FeaturedShowcaseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
        >
          Our Projects / Featured Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

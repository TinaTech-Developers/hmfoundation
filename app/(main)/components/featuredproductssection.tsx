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
    title: "Education for Children",
    description:
      "Providing access to quality education, learning resources, and teacher support for children in underserved communities.",
    imageUrl: "/images/projects/education.jpg",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description:
      "Building sustainable clean water systems in rural areas to improve health and well-being.",
    imageUrl: "/images/projects/water.jpg",
  },
  {
    id: 3,
    title: "Women Empowerment Programs",
    description:
      "Training and supporting women with skills and resources to achieve financial independence.",
    imageUrl: "/images/projects/women.jpg",
  },
  {
    id: 4,
    title: "Tree Planting Campaign",
    description:
      "Restoring natural habitats and combating climate change through large-scale tree planting.",
    imageUrl: "/images/projects/trees.jpg",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base font-semibold text-lime-600 uppercase mb-2 inline-block"
        >
          Our Projects
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
        >
          Featured Initiatives
        </motion.h3>

        <p className="text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Key initiatives we run to empower communities, improve lives, and
          protect the environment.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm flex-1">
                  {project.description}
                </p>
                <div className="mt-4 h-1 w-12 bg-lime-600 rounded-full"></div>
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

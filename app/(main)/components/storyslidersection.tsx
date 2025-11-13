"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Story {
  id: number;
  title: string;
  imageUrl: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "Education for Every Child",
    imageUrl:
      "https://eduspots.org/wp-content/uploads/2017/11/fullsizeoutput_b7-1600x1200.jpeg",
  },
  {
    id: 2,
    title: "Elderly Care Initiative",
    imageUrl: "/social-worker-taking-care-old-woman.jpg",
  },
  {
    id: 3,
    title: "Community Empowerment ",
    imageUrl: "/empowering_communities.png",
  },
];

export default function StorySliderSection() {
  const [current, setCurrent] = useState(0);
  const total = stories.length;

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base font-semibold text-lime-600 uppercase mb-2 inline-block"
        >
          Our Stories
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
        >
          In Action
        </motion.h3>

        <div className="relative">
          {/* Slide */}
          <motion.div
            key={stories[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-96 sm:h-112 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={stories[current].imageUrl}
              alt={stories[current].title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                {stories[current].title}
              </h4>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? "bg-lime-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

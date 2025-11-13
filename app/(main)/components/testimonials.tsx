"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  quote: string;
  photoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eriazeri Muguti",
    role: "Community Volunteer",
    quote:
      "It continuously gives us good information about what needs to be done and what is done. Hiraya Manawari Foundation makes a very big difference in many positive ways to the children’s lives and gives them hope for the future. It is so worthwhile supporting these children and their communities through Hiraya Manawari Foundation.",
    photoUrl:
      "https://e7.pngegg.com/pngimages/86/519/png-clipart-computer-icons-person-blog-person-icon-rectangle-logo-thumbnail.png",
  },
  {
    id: 2,
    name: "Nyasha Muronzi",
    role: "Community Volunteer",
    quote:
      "It has been great being part of the intiative which is dedicated to serve and save lifes at the same time. Hiraya Manawari is a true testament of giving back to community.",
    photoUrl:
      "https://e7.pngegg.com/pngimages/86/519/png-clipart-computer-icons-person-blog-person-icon-rectangle-logo-thumbnail.png",
  },
  {
    id: 3,
    name: "Sebastian Jerahuni",
    role: "Local Partner",
    quote:
      "Talk of selfless commitment in alleviating communities, Hiraya stands on solid ground. I am loving the groundwork happening in solidifying the vision.",
    photoUrl:
      "https://e7.pngegg.com/pngimages/86/519/png-clipart-computer-icons-person-blog-person-icon-rectangle-logo-thumbnail.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base font-semibold text-lime-600 uppercase mb-2 inline-block"
        >
          Voices of Change
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
        >
          What Our Community Says
        </motion.h3>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center max-w-xl mx-auto"
            >
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                <Image
                  src={testimonials[current].photoUrl}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 text-sm mb-3 text-center">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <h4 className="text-gray-900 font-semibold">
                {testimonials[current].name}
              </h4>
              {testimonials[current].role && (
                <p className="text-gray-500 text-sm">
                  {testimonials[current].role}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
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

      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-lime-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-lime-200 rounded-full blur-3xl opacity-15"></div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Enhancing Lives: Children",
    subtitle:
      "We ensure every child has the best possible start in life by providing support, guidance, and opportunities that help them grow and reach their full potential.",
    image:
      "https://m2m.org/wp-content/uploads/2021/06/084Mulanje-District-Abunu-Community-Play-Group.jpg",
    cta: "Support Children",
    href: "/donate",
    //  https://eduspots.org/wp-content/uploads/2017/11/fullsizeoutput_b7-1600x1200.jpeg
  },
  {
    title: "Enhancing Lives: Elderly",
    subtitle:
      "We provide comprehensive care and support for the elderly, ensuring their physical, emotional, and social needs are met with dignity and compassion.",
    image: "/rear-view-retired-couple-walking-sunset.jpg",
    cta: "Support Elderly Care",
    href: "/donate",
  },
  {
    title: "Reaching Communities: Projects",
    subtitle:
      "We extend our impact through community-based projects that support vulnerable children and elderly individuals, ensuring they receive care, resources, and opportunities where they live.",
    image: "/environment.jpg",
    cta: "Explore Projects",
    href: "/donate",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover w-full h-full scale-105 transition-transform duration-[7s] ease-out"
          />

          {/* Overlay */}
          <div className="absolute inset-0 md:top-28 bg-black/50 flex items-center justify-center px-6 text-center ">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: current === index ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-sm bg-black/40 p-8 md:p-12 rounded-2xl shadow-xl max-w-2xl"
            >
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-8">
                {slide.subtitle}
              </p>
              <Link
                href={slide.href}
                className="inline-block px-8 py-3 bg-linear-to-r from-[#A7CE44] to-[#A7CE44] text-white rounded-full font-semibold shadow-md hover:from-[#A7CE44]-700 hover:to-[#A7CE44]-600 hover:scale-105 transition-all duration-300"
              >
                {slide.cta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-[#A7CE44]" : "bg-white/50"
            } transition-all`}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";

export default function CTASection() {
  return (
    <section className="relative bg-lime-600 text-white py-24 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Join Us in Making a Difference
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg sm:text-xl mb-8 text-white/90"
        >
          Your support empowers communities, provides clean water, and shapes
          brighter futures. Be part of the change today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#donate"
            className="px-8 py-3 bg-white text-lime-600 font-semibold rounded-full shadow-lg hover:bg-white/90 transition"
          >
            Donate Now
          </a>
          <a
            href="#volunteer"
            className="px-8 py-3 border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white/10 transition"
          >
            Volunteer
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";

export default function CTASection() {
  return (
    <section className="relative py-20 bg-[#A7CE44] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#A7CE44]/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#A7CE44]/30 rounded-full blur-3xl"></div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Partner with Us in Making a Difference
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-lg sm:text-xl mb-8"
        >
          {/* Your support empowers communities, educates children, and creates a
          sustainable future. */}
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/donate"
            className="px-8 py-3 bg-white text-[#A7CE44] font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            Donate
          </a>
          <a
            href="/volunteer"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full shadow hover:bg-white hover:text-[#A7CE44] transition"
          >
            Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}

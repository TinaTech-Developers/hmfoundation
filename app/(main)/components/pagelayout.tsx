"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CTA {
  label: string;
  href: string;
  ariaLabel?: string;
  // optional style hint: "primary" | "ghost" etc — you can expand later
  variant?: "primary" | "secondary";
}

interface PageLayoutProps {
  title: string;
  description: string;
  image: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  children?: React.ReactNode;
}

export default function PageLayout({
  title,
  description,
  image,
  ctaPrimary,
  ctaSecondary,
  children,
}: PageLayoutProps) {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl mb-6 text-gray-100 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons (optional) */}
          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2"
            >
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  aria-label={ctaPrimary.ariaLabel ?? ctaPrimary.label}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                    bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base"
                >
                  {ctaPrimary.label}
                </a>
              )}

              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  aria-label={ctaSecondary.ariaLabel ?? ctaSecondary.label}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition ring-1 ring-white/20 text-white text-sm sm:text-base
                    bg-white/10 hover:bg-white/20"
                >
                  {ctaSecondary.label}
                </a>
              )}
            </motion.div>
          )}
        </motion.div>
      </section>

      {children && <div className="relative z-10">{children}</div>}
    </main>
  );
}

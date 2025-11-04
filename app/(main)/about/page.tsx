"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImpactSection from "./_components/impactsection";
import FeaturedShowcaseSection from "./_components/featuredshowcasesection";
import CommunityTestimonialsCarousel from "./_components/communitytestimonialscarousel";
import CTASection from "./_components/ctasection";
import ProfessionalFooter from "./_components/professionalfooter";
import PageLayout from "../components/pagelayout";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Us - Hiraya Manawari Foundation"
      description="Discover the mission, vision, and story behind the Hiraya Manawari Foundation. Learn how we empower communities through education, clean water, and sustainable development."
      image="/education.jpg"
      ctaPrimary={{ label: "Explore Our Impact", href: "/projects" }}
      ctaSecondary={{ label: "Get Involved", href: "/donate" }}
    >
      {/* Hero Section */}

      {/* Mission & Vision */}
      <section className="relative py-16 sm:py-20 bg-linear-to-br from-gray-50 via-white to-green-50 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>

            <p className="text-gray-700  mb-6 leading-relaxed">
              We are dedicated to empowering communities through education,
              clean water, and sustainable development. Our vision is a world
              where opportunity, dignity, and equality are realities for all.
            </p>

            <div className="space-y-4">
              {[
                "Provide quality education and learning opportunities for every child.",
                "Implement sustainable access to clean and safe water.",
                "Empower women through skills training, entrepreneurship, and leadership.",
                "Build strong, community-driven initiatives that foster lasting change.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first md:order-last"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 w-full">
              <Image
                src="/hands-holding-each-other-support.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2  sm:-bottom-6 sm:left-32 bg-green-600 text-white px-4 sm:px-6 py-3 rounded-xl shadow-lg text-center sm:text-left w-[80%] sm:w-auto">
              <p className="font-semibold text-base sm:text-lg">
                Driven by Purpose
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                Founded in hope, growing through impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-16 sm:py-24 bg-linear-to-b from-white via-gray-50 to-green-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-green-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96">
              <Image
                src="/images/about/story.jpg"
                alt="Our Story"
                width={600}
                height={450}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:-left-4 sm:translate-x-0 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-xs sm:text-sm font-medium whitespace-nowrap">
              Est. 2015 — Making Impact
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700  leading-relaxed mb-6">
              Founded in 2015, the{" "}
              <span className="font-semibold text-green-700">
                Hiraya Manawari Foundation
              </span>{" "}
              began as a small community initiative focused on supporting
              children’s education. Guided by compassion and purpose, it quickly
              grew into a transformative movement serving families across
              Zimbabwe.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Today, our work spans clean water access, women’s empowerment,
              environmental protection, and sustainable livelihoods — all rooted
              in the belief that lasting change starts with empowered people.
            </p>
            <div className="border-l-4 border-green-600 pl-4 italic text-gray-600 text-sm sm:text-base">
              “Every step we take is a story of hope, resilience, and
              transformation.”
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <ImpactSection />
      <FeaturedShowcaseSection />
      <CommunityTestimonialsCarousel />
      <CTASection />
    </PageLayout>
  );
}

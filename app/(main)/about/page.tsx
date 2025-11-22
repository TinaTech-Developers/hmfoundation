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
      title="About Us"
      description="Discover the mission, vision, and story behind the Hiraya Manawari Foundation."
      image="https://www.shutterstock.com/image-photo/teamwork-partnership-concept-hands-raised-600nw-2465435951.jpg"
      // ctaPrimary={{ label: "Explore Our Impact", href: "/projects" }}
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
              The Hiraya Manawari Foundation is committed to creating a caring
              and supportive community for all generations, where children are
              nurtured to grow and thrive, and the elderly are valued,
              respected, and cared for with dignity and compassion.
            </p>

            <div className="space-y-4">
              {[
                "Ensure every child has the best possible start in life by providing support and empowerment to reach their full potential.",
                "Provide comprehensive care and support for the elderly, ensuring their physical, emotional, and social needs are met.",
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
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-green-600 h-64 sm:h-80 md:h-96">
              <Image
                src="/hands-holding-each-other-support.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2  sm:-bottom-6 sm:left-32 bg-green-600 text-white px-4 sm:px-6 py-3 rounded-xl shadow-lg text-center sm:text-left w-[80%] sm:w-auto">
              {/* <p className="font-semibold text-base sm:text-lg">
                Driven by Purpose
              </p> */}
              <p className="text-xs sm:text-sm opacity-90">
                Founded in hope, guided by compassion, empowered dy the
                community, and inspired by faith.
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
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-green-600 h-64 sm:h-80 md:h-96">
              <Image
                src="/environment.jpg"
                alt="Our Story"
                width={600}
                height={450}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:-left-4 sm:translate-x-0 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-xs sm:text-sm font-medium whitespace-nowrap">
              Est. 2017 — Making Impact
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
              Founded on 24 July 2017, the{" "}
              <span className="font-semibold text-green-700">
                Hiraya Manawari Foundation
              </span>
              {
                "  began as a small community initiative dedicated to supporting  children’s education and nurturing their potential. Guided by compassion and purpose, it has grown into a foundation committed to creating a caring and supportive environment for both the young and the elderly."
              }
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {"Today, we continue to make a positive impact. "}
              {/* by ensuring that every child receives the best possible start in
              life and that the elderly are cared for with dignity, love, and
              respect. */}
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
      {/* <FeaturedShowcaseSection /> */}
      {/* <CommunityTestimonialsCarousel /> */}
      <CTASection />
    </PageLayout>
  );
}

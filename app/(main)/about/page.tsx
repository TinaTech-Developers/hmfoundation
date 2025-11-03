"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImpactSection from "./_components/impactsection";
import FeaturedShowcaseSection from "./_components/featuredshowcasesection";
import CommunityTestimonialsCarousel from "./_components/communitytestimonialscarousel";
import CTASection from "./_components/ctasection";
import ProfessionalFooter from "./_components/professionalfooter";

export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro */}
      {/* Hero / Intro */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <Image
          src="/education.jpg"
          alt="Empowering communities"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Building Hope. Empowering Lives.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl mb-8 text-gray-100"
          >
            We are a catalyst for change — transforming communities through
            education, clean water, and women’s empowerment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="/projects"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Explore Our Impact
            </a>
            <a
              href="/donate"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-full font-semibold backdrop-blur-sm transition"
            >
              Get Involved
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Overlay */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50/90 to-transparent"></div> */}
      </section>

      {/* Mission & Vision */}
      {/* Mission & Vision */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
        {/* Decorative Background Shape */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We are dedicated to empowering communities through education,
              clean water, and sustainable development. Our vision is a world
              where opportunity, dignity, and equality are realities for all.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full text-sm font-bold">
                  1
                </span>
                <p className="text-gray-700">
                  Provide quality education and learning opportunities for every
                  child.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full text-sm font-bold">
                  2
                </span>
                <p className="text-gray-700">
                  Implement sustainable access to clean and safe water.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full text-sm font-bold">
                  3
                </span>
                <p className="text-gray-700">
                  Empower women through skills training, entrepreneurship, and
                  leadership.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full text-sm font-bold">
                  4
                </span>
                <p className="text-gray-700">
                  Build strong, community-driven initiatives that foster lasting
                  change.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 w-full">
              <Image
                src="/hands-holding-each-other-support.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="font-semibold text-lg">Driven by Purpose</p>
              <p className="text-sm opacity-90">
                Founded in hope, growing through impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      {/* Our Story */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-green-50 overflow-hidden">
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/story.jpg"
                alt="Our Story"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>

            {/* Small Story Tag */}
            <div className="absolute -bottom-6 left-8 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
              Est. 2015 — Making Impact
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 2015, the{" "}
              <span className="font-semibold text-green-700">
                Hiraya Manawari Foundation
              </span>{" "}
              began as a small community initiative focused on supporting
              children’s education. Guided by compassion and purpose, it quickly
              grew into a transformative movement serving families across
              Zimbabwe.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Today, our work spans clean water access, women’s empowerment,
              environmental protection, and sustainable livelihoods — all rooted
              in the belief that lasting change starts with empowered people.
            </p>

            <div className="border-l-4 border-green-600 pl-4 italic text-gray-600">
              “Every step we take is a story of hope, resilience, and
              transformation.”
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <ImpactSection />

      {/* Featured Projects / Initiatives */}
      <FeaturedShowcaseSection />

      {/* Community Testimonials Carousel */}
      <CommunityTestimonialsCarousel />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <ProfessionalFooter />
    </>
  );
}

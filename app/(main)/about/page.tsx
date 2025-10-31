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
      <section className="relative bg-gray-50 h-[60vh] flex items-center justify-center">
        <div className="max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            About Hiraya Manawari Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-700"
          >
            Empowering communities, educating children, providing clean water,
            and supporting women to build a brighter future.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about/mission.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-700 mb-4">
              We strive to empower communities through education, access to
              clean water, and women’s empowerment programs. Our vision is a
              world where every child can learn, every family has safe water,
              and communities thrive.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Provide quality education for children in underserved
                communities.
              </li>
              <li>Implement sustainable clean water solutions.</li>
              <li>Empower women with skills, training, and resources.</li>
              <li>Foster community-driven initiatives and leadership.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 text-lg sm:text-xl leading-relaxed"
          >
            Founded in 2015, Hiraya Manawari Foundation began as a small
            community initiative to support children’s education. Over the
            years, we expanded our programs to include clean water projects,
            women’s empowerment, and environmental sustainability. Each project
            is guided by our commitment to create lasting positive change in
            communities across Zimbabwe.
          </motion.p>
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

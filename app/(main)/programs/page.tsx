"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import PageLayout from "../components/pagelayout";

export default function ProgramsPage() {
  return (
    <PageLayout
      title="Our Programs - Hiraya Manawari Foundation"
      description="Explore the transformative programs driving our mission — education, clean water, women empowerment, and sustainable community development."
      image="/images/programs/hero.jpg"
      ctaPrimary={{ label: "Get Involved", href: "/get-involved" }}
      ctaSecondary={{ label: "Donate Now", href: "/donate" }}
    >
      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Empowering Communities Through Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Our programs are designed to create lasting change — nurturing
            education, improving livelihoods, and protecting our environment for
            generations to come.
          </motion.p>
          <div className="w-4/5 mx-auto mt-8 border-t-2 border-lime-600 opacity-50"></div>
        </div>
      </section>

      {/* Program Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Children Educated", value: "5,200+" },
              { label: "Clean Water Projects", value: "48" },
              { label: "Women Empowered", value: "1,300+" },
              { label: "Communities Reached", value: "35" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <p className="text-2xl font-bold text-lime-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:shadow-lime-600 hover:-translate-y-1 transition-all"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center pb-10">
                {" "}
                {/* Added bottom padding so text doesn't overlap the line */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <a
                  href={program.link}
                  className="inline-block text-lime-700 font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* LIME LINE fixed at bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-4/5 bg-lime-600"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Stories of Impact
          </motion.h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Hear directly from the people whose lives have been transformed
            through our programs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Thanks to the Clean Water project, our village now has safe drinking water!",
                name: "Maria, Bulawayo",
              },
              {
                quote:
                  "The scholarship program allowed my children to attend school for the first time.",
                name: "Tendai, Harare",
              },
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <p className="text-gray-800 italic mb-4">“{testi.quote}”</p>
                <p className="font-semibold text-gray-900">{testi.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-green-700 to-green-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            {"Together, We’re Building Brighter Futures"}
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-100 text-sm sm:text-base leading-relaxed mb-8">
            Every program we run is made possible by dedicated volunteers,
            donors, and community partners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-involved"
              className="bg-white text-lime-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Involved
            </a>
            <a
              href="/donate"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-800 transition"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

/* ---------- FAQ SECTION ---------- */
function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn more about our programs, how we work, and ways you can get
          involved in creating meaningful change.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-semibold text-gray-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-lime-600 transition-transform duration-300 ${
                  active === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {active === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-gray-700 text-sm sm:text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- DATA ---------- */
const programs = [
  {
    title: "Education for All",
    description:
      "Providing children access to quality learning materials, mentorship, and digital literacy resources.",
    image: "/images/programs/education.jpg",
    link: "/programs/education",
  },
  {
    title: "Clean Water Initiative",
    description:
      "Ensuring sustainable clean water access through boreholes, sanitation, and hygiene education.",
    image: "/images/programs/water.jpg",
    link: "/programs/water",
  },
  {
    title: "Women Empowerment",
    description:
      "Helping women achieve economic independence through training, leadership, and entrepreneurship support.",
    image: "/images/programs/women.jpg",
    link: "/programs/women",
  },
  {
    title: "Community Health",
    description:
      "Providing essential medical outreach and promoting preventative health in vulnerable communities.",
    image: "/images/programs/health.jpg",
    link: "/programs/health",
  },
  {
    title: "Environmental Protection",
    description:
      "Promoting tree planting, recycling, and sustainable practices to preserve our environment.",
    image: "/images/programs/environment.jpg",
    link: "/programs/environment",
  },
  {
    title: "Sustainable Livelihoods",
    description:
      "Supporting communities with agricultural training and small business development for self-reliance.",
    image: "/images/programs/livelihoods.jpg",
    link: "/programs/livelihoods",
  },
];

const faqs = [
  {
    question: "How can I participate in your programs?",
    answer:
      "You can join as a volunteer, donate to support a project, or partner with us on a community initiative. Visit the 'Get Involved' page to learn more.",
  },
  {
    question: "Where do your programs operate?",
    answer:
      "We currently operate across several communities in Zimbabwe, focusing on rural and underserved regions where our support has the greatest impact.",
  },
  {
    question: "Can I donate to a specific program?",
    answer:
      "Yes! When making your donation, you can specify which program or project you'd like your funds to support — education, water, health, or others.",
  },
  {
    question: "Do you collaborate with other organizations?",
    answer:
      "Absolutely. We believe in the power of collaboration and regularly work with local authorities, NGOs, and community leaders to maximize our reach.",
  },
  {
    question: "How do you ensure program transparency?",
    answer:
      "We conduct regular impact assessments, publish reports, and maintain open communication with donors and partners to ensure accountability.",
  },
];

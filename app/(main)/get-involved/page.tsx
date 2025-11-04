"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import PageLayout from "../components/pagelayout";

export default function GetInvolvedPage() {
  return (
    <PageLayout
      title="Get Involved - Hiraya Manawari Foundation"
      description="Join us in creating meaningful change. Explore volunteering, donations, partnerships, and events to support communities across Zimbabwe."
      image="/images/get-involved/hero.jpg"
      ctaPrimary={{ label: "Volunteer Today", href: "/volunteer" }}
      ctaSecondary={{ label: "Donate Now", href: "/donate" }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Be the Change You Want to See
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Join the Hiraya Manawari Foundation in creating a lasting impact.
            Your time, skills, and contributions help empower communities across
            Zimbabwe.
          </motion.p>
          <div className="w-4/5 mx-auto mt-8 border-t-2 border-lime-600 opacity-50"></div>
        </div>
      </section>

      {/* Modern Get Involved Section */}
      <section className="relative py-28 bg-gradient-to-b from-white via-green-50 to-green-100 overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-lime-100 rounded-full opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-200 rounded-full opacity-20 -z-10"></div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-20"
        >
          Get Involved & Make an Impact
        </motion.h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {getInvolvedOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                i % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Card with diagonal cut */}
              <div className="relative w-full lg:w-1/2 h-80 overflow-hidden rounded-[2rem] shadow-2xl group cursor-pointer">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-lime-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {option.title}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {option.title}
                </h3>
                <p className="text-gray-700 mb-6">{option.description}</p>
                <a
                  href={option.link}
                  className="inline-block bg-lime-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-lime-700 transition"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ways to Get Involved - Interactive Flip Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          >
            Get Involved in Transformative Ways
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {getInvolvedOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group perspective"
              >
                <div className="relative w-full h-80 rounded-3xl shadow-lg transition-transform transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer">
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden bg-gradient-to-tr from-lime-500 to-lime-300 rounded-3xl flex flex-col items-center justify-center p-6 text-white">
                    <div className="w-16 h-16 mb-4">
                      <Image
                        src={option.image}
                        alt={option.title}
                        width={64}
                        height={64}
                        className="object-cover rounded-full border-2 border-white shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{option.title}</h3>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-inner">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-700 text-center mb-4">
                      {option.description}
                    </p>
                    <a
                      href={option.link}
                      className="text-lime-600 font-medium hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .group-hover\\:rotate-y-180:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

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
            Join Us and Make a Difference Today
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-100 text-sm sm:text-base leading-relaxed mb-8">
            Your contribution empowers communities and transforms lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/volunteer"
              className="bg-white text-lime-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Volunteer Today
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
          Learn more about how to get involved and make a lasting impact.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {getInvolvedFAQs.map((faq, index) => (
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
const getInvolvedOptions = [
  {
    title: "Volunteer",
    description:
      "Give your time and skills to support our community initiatives and programs.",
    image: "/images/get-involved/volunteer.jpg",
    link: "/volunteer",
  },
  {
    title: "Donate",
    description:
      "Provide financial support to fund our impactful programs and projects.",
    image: "/images/get-involved/donate.jpg",
    link: "/donate",
  },
  {
    title: "Partner",
    description:
      "Collaborate with us as an organization, school, or business to expand our reach.",
    image: "/images/get-involved/partner.jpg",
    link: "/partner",
  },
  {
    title: "Events",
    description:
      "Join or organize events that raise awareness and funds for community development.",
    image: "/images/get-involved/events.jpg",
    link: "/events",
  },
];

const volunteerTestimonials = [
  {
    quote:
      "Volunteering with Hiraya Manawari Foundation has been life-changing. I’ve seen communities transform firsthand!",
    name: "Leroy, Harare",
  },
  {
    quote:
      "I met amazing people while contributing to meaningful projects that genuinely make a difference.",
    name: "Chipo, Bulawayo",
  },
];

const getInvolvedFAQs = [
  {
    question: "How do I start volunteering?",
    answer:
      "Visit the Volunteer page and fill out the application form. Our team will guide you through the onboarding process.",
  },
  {
    question: "Can I donate to a specific project?",
    answer:
      "Yes, during donation you can select which program or project you wish to support.",
  },
  {
    question: "Are there any requirements to volunteer?",
    answer:
      "Volunteers must be at least 16 years old. Specific programs may have additional requirements.",
  },
  {
    question: "Can organizations partner with Hiraya Manawari Foundation?",
    answer:
      "Absolutely. We welcome collaborations with schools, businesses, and other NGOs to expand our impact.",
  },
];

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "../components/pagelayout";
import PartnerSpotlightSection from "./_components/partnerspotlightsection";
import CommunityTestimonialsCarousel from "../about/_components/communitytestimonialscarousel";
import { SlUmbrella } from "react-icons/sl";

export default function NewsPage() {
  return (
    <PageLayout
      title="News & Updates - Hiraya Manawari Foundation"
      description="Stay informed with stories, community updates, and highlights from our projects and partners."
      image="/images/news/hero.jpg"
      ctaPrimary={{ label: "Join Our Newsletter", href: "/subscribe" }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-white via-gray-50 to-green-50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            The Hiraya Journal
          </motion.h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Inspiring stories, impact highlights, and updates from our projects
            and partners — curated to keep you informed and connected.
          </p>
        </div>
      </section>

      {/* News Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              <div className="relative h-80 w-full">
                <Image
                  src="/images/news/featured.jpg"
                  alt="Featured article"
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-8">
                <span className="text-green-700 text-sm font-semibold">
                  COMMUNITY IMPACT
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                  How Rural Communities Are Transforming Through Education
                </h2>
                <p className="text-gray-700 mb-6">
                  Through our education empowerment programs, children and youth
                  in rural areas are gaining access to better learning
                  opportunities. This initiative has already reached over 1,200
                  learners across Zimbabwe.
                </p>
                <Link
                  href="#"
                  className="text-lime-700 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {newsArticles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-lime-600 transition overflow-hidden"
                >
                  {/* Article Image */}
                  <div className="relative h-56 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 pb-10">
                    <p className="text-sm text-green-700 font-semibold mb-2">
                      {article.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-lime-700 font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>

                  {/* Lime accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-4/5 bg-lime-600 "></div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {["Education", "Environment", "Health", "Community"].map(
                  (cat, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-lime-700 transition"
                      >
                        {cat}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Subscribe Box */}
            <div className="bg-lime-50 border border-lime-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                Subscribe for Updates
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Get monthly updates about our projects, success stories, and
                volunteer opportunities.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <button
                  type="submit"
                  className="bg-lime-700 text-white font-semibold py-2 rounded-lg hover:bg-lime-800 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
      <PartnerSpotlightSection />
      <CommunityTestimonialsCarousel />
    </PageLayout>
  );
}

/* ---------- DATA ---------- */
const newsArticles = [
  {
    slug: "empowering-women-sustainable-farming",
    title: "Empowering Women Through Sustainable Farming",
    excerpt:
      "Women-led farming initiatives are driving food security and community growth in rural districts.",
    image: "/images/news/women-farming.jpg",
    category: "Sustainability",
  },
  {
    slug: "youth-innovation-building-a-greener-future",
    title: "Youth Innovation: Building a Greener Future",
    excerpt:
      "Our youth programs are empowering young innovators to create eco-friendly business solutions.",
    image: "/images/news/green-innovation.jpg",
    category: "Environment",
  },
  {
    slug: "healthcare-outreach-remote-areas",
    title: "Healthcare Outreach in Remote Areas",
    excerpt:
      "Mobile clinics are bringing healthcare access to families in previously underserved communities.",
    image: "/images/news/healthcare.jpg",
    category: "Health",
  },
  {
    slug: "community-driven-education-success-stories",
    title: "Tech for Good: Digital Literacy for All",
    excerpt:
      "We’re bridging the digital divide by equipping communities with essential tech skills for the future.",
    image: "/images/news/digital-literacy.jpg",
    category: "Education",
  },
];

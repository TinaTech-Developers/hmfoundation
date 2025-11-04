"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../../components/pagelayout";
import PartnerSpotlightSection from "../_components/partnerspotlightsection";

const allArticles = [
  {
    slug: "empowering-women-through-sustainable-farming",
    title: "Empowering Women Through Sustainable Farming",
    image: "/images/news/women-farming.jpg",
    category: "Sustainability",
    date: "2025-10-12",
    excerpt:
      "How women-led farming projects are transforming rural communities and empowering families across Zimbabwe.",
    content: `
      Women in rural communities are leading the charge toward sustainable agriculture.
      Through our support programs, they’re gaining access to training, tools, and funding.
      This initiative has improved food security and empowered women economically.

      Beyond agriculture, these women are mentoring others — creating a ripple effect
      of empowerment across villages. Together, they are redefining community resilience.
    `,
  },
  {
    slug: "youth-innovation-building-a-greener-future",
    title: "Youth Innovation: Building a Greener Future",
    image: "/images/news/green-innovation.jpg",
    category: "Environment",
    date: "2025-09-28",
    excerpt:
      "How young innovators are leading sustainability through creative green technologies.",
    content: `
      Young innovators are taking the lead in environmental action. Our initiative provides
      mentorship, funding, and networking opportunities to help them launch sustainable startups.
      From clean energy to recycling technology, they’re shaping a better tomorrow.
    `,
  },
  {
    slug: "healthcare-outreach-remote-areas",
    title: "Healthcare Outreach in Remote Areas",
    image: "/images/news/healthcare-outreach.jpg",
    category: "Health",
    date: "2025-09-15",
    excerpt:
      "Bringing essential healthcare services to underserved communities through mobile clinics.",
    content: `
      Access to healthcare remains a challenge in remote areas. Our mobile clinics are bridging
      this gap by providing essential medical services directly to these communities.
      From vaccinations to health education, we’re making a tangible difference in people’s lives.
    `,
  },
  {
    slug: "community-driven-education-success-stories",
    title: "Tech for Good: Digital Literacy for All",
    image: "/images/news/digital-literacy.jpg",
    category: "Education",
    date: "2025-08-30",
    excerpt:
      "Bridging the digital divide by equipping communities with essential tech skills for the future.",
    content: `
      In today’s digital age, access to technology is crucial. Our digital literacy programs
      are empowering individuals with the skills they need to thrive. From basic computer skills
      to coding workshops, we’re opening doors to new opportunities and brighter futures.
    `,
  },
];
export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageLayout
        title="Article Not Found"
        description="Sorry, we couldn’t find the article you’re looking for."
        image="/images/news/hero.jpg"
      >
        <div className="py-40 text-center text-gray-600">
          <h1 className="text-3xl font-bold mb-2">404 — Article Not Found</h1>
          <p className="mb-6">
            The article you’re looking for doesn’t exist or was removed.
          </p>
          <Link
            href="/news"
            className="bg-lime-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-800 transition"
          >
            Back to News
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`${article.title} - Hiraya Manawari Foundation`}
      description={article.excerpt}
      image={article.image}
    >
      <article className="bg-white max-w-4xl mx-auto py-20 px-6 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-700 font-semibold text-sm uppercase">
            {article.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            {article.title}
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Published on {article.date}
          </p>

          <div className="relative h-96 w-full mb-10 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {article.content.split("\n").map((p, i) => (
              <p key={i} className="mb-6">
                {p}
              </p>
            ))}
          </div>

          <Link
            href="/news"
            className="inline-block mt-10 text-lime-700 font-semibold hover:underline"
          >
            ← Back to All News
          </Link>
        </motion.div>
      </article>

      <PartnerSpotlightSection />
    </PageLayout>
  );
}

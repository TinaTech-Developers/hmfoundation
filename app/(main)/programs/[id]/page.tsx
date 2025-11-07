"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../../components/pagelayout";

interface Program {
  _id: string;
  title: string;
  description: string;
  image: string;
  content: string;
}

export default function ProgramDetailPage() {
  const { id } = useParams();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProgram = async () => {
      try {
        const res = await fetch(`/api/admin/programs/${id}`);
        if (!res.ok) throw new Error("Program not found");
        const data: Program = await res.json();
        setProgram(data);
      } catch (err) {
        console.error(err);
        setProgram(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProgram();
  }, [id]);

  if (loading) {
    return (
      <PageLayout
        title="Loading..."
        description="Loading program..."
        image="/images/programs/hero.jpg"
      >
        <div className="py-40 text-center text-gray-600">
          Loading program...
        </div>
      </PageLayout>
    );
  }

  if (!program) {
    return (
      <PageLayout
        title="Program Not Found"
        description="The requested program could not be found."
        image="/images/programs/hero.jpg"
      >
        <div className="py-40 text-center text-gray-600">
          <h1 className="text-3xl font-bold mb-2">404 — Program Not Found</h1>
          <Link
            href="/programs"
            className="text-lime-700 font-semibold hover:underline"
          >
            Back to Programs
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`${program.title} - Hiraya Manawari Foundation`}
      description={program.description}
      image={program.image}
    >
      <article className="bg-white max-w-4xl mx-auto py-20 px-6 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {program.title}
          </h1>

          <div className="relative h-96 w-full mb-10 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {(program.content ?? "")
              .split("\n")
              .filter((p) => p.trim() !== "")
              .map((p, i) => (
                <p key={i} className="mb-6">
                  {p}
                </p>
              ))}
          </div>

          <Link
            href="/programs"
            className="inline-block mt-10 text-lime-700 font-semibold hover:underline"
          >
            ← Back to Programs
          </Link>
        </motion.div>
      </article>
    </PageLayout>
  );
}

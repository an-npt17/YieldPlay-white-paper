"use client";

import { useSearchParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { DOCS_CONTENT } from "@/constants/docs";
import { Suspense } from "react";
import { ArrowRight, Share2 } from "lucide-react";

function DocContent() {
  const searchParams = useSearchParams();
  const sectionId = searchParams.get("s") || "abstract";
  const data = DOCS_CONTENT[sectionId] || DOCS_CONTENT.abstract;

  return (
    <main className="flex-1 px-6 py-12 md:px-24 md:py-24 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-12">
        <span>White Paper</span>
        <ArrowRight size={10} />
        <span className="text-black">{data.title}</span>
      </div>

      {/* Header */}
      <header className="mb-16">
        <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6 tracking-tight">
          {data.title}
        </h2>
        <p className="text-xl font-light text-neutral-500 italic">
          {data.subtitle}
        </p>
      </header>

      {/* Content */}
      <article className="space-y-8">
        {data.content.map((para, index) => (
          <p
            key={index}
            className="text-lg leading-relaxed text-neutral-800 font-light max-w-2xl"
          >
            {para}
          </p>
        ))}

        {/* Mock Graphic/Figure */}
        <div className="my-12 p-12 bg-neutral-50 border border-neutral-100 rounded-sm flex flex-col items-center justify-center text-center">
          <div className="w-full h-px bg-neutral-200 mb-8" />
          <p className="text-xs font-mono uppercase text-neutral-400 tracking-tighter">
            Fig 1.1 — Protocol Data Flow Visual Representation
          </p>
        </div>
      </article>

      {/* Footer Actions */}
      <footer className="mt-24 pt-8 border-t border-neutral-100 flex justify-between items-center">
        <span className="text-xs text-neutral-400">
          © 2025 Horizon Foundation
        </span>
        <button className="flex items-center gap-2 text-xs hover:underline decoration-neutral-300">
          <Share2 size={14} /> Share Section
        </button>
      </footer>
    </main>
  );
}

export default function WhitePaperPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <Suspense fallback={<div className="p-10">Loading...</div>}>
        <Sidebar />
        <DocContent />
      </Suspense>
    </div>
  );
}

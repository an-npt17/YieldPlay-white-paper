"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DOCS_CONTENT } from "@/constants/docs";

export default function Sidebar() {
  const searchParams = useSearchParams();
  const activeId = searchParams.get("s") || "abstract";

  return (
    <aside className="w-72 hidden md:flex flex-col border-r border-neutral-100 h-screen sticky top-0 p-10 bg-white">
      <div className="mb-12">
        <h1 className="text-lg font-bold tracking-widest uppercase">Horizon</h1>
        <p className="text-[10px] text-neutral-400 font-mono mt-1 tracking-tighter">
          WP-VER-2025.01
        </p>
      </div>

      <nav className="flex flex-col gap-6">
        {Object.values(DOCS_CONTENT).map((section) => (
          <Link
            key={section.id}
            href={`?s=${section.id}`}
            className={`text-sm transition-all duration-200 hover:translate-x-1 ${
              activeId === section.id
                ? "text-black font-semibold"
                : "text-neutral-400 font-normal hover:text-black"
            }`}
          >
            {section.title}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-10">
        <button className="text-[10px] uppercase tracking-widest text-neutral-400 border border-neutral-200 px-4 py-2 hover:bg-black hover:text-white transition-colors">
          Download PDF
        </button>
      </div>
    </aside>
  );
}

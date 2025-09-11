// components/GenerateWithAI.jsx
"use client";
import Image from "next/image";

export default function GenerateWithAI({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center rounded-[18px]
                 h-10 md:h-[51px] px-3 md:px-4
                 bg-[#CBD8FF]/80 border border-[#CBD8FF]
                 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
      aria-label="Generate with AI"
    >
      <Image
        src="/icons/Fantasy-1.svg"
        alt="Generate"
        width={20}
        height={20}
        priority
        className="mr-2 md:mr-3 select-none"
      />
      <span className="text-[14px] md:text-[18px] font-semibold text-gray-900 tracking-tight">
        Generate with AI
      </span>
    </button>
  );
}

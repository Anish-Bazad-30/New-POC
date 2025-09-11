// components/NewWorkspace.jsx
"use client";
import { FiCode } from "react-icons/fi";

export default function NewWorkspace({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 md:gap-3 rounded-full
                 h-10 md:h-[51px] px-3 md:px-5
                 bg-[#C7D0FF]/60 border border-[#C7D0FF]
                 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
      aria-label="New workspace"
    >
      <span className="grid place-items-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-indigo-200/70 text-indigo-700">
        <FiCode className="text-[13px] md:text-[18px]" />
      </span>
      <span className="text-[13px] md:text-[18px] font-semibold text-black">New workspace</span>
    </button>
  );
}

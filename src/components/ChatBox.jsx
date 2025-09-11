// components/ChatBox.jsx
"use client";

import { useRef } from "react";
import { FiPaperclip } from "react-icons/fi";

export default function ChatBox({ onFilesSelected }) {
  const fileInputRef = useRef(null);

  const openPicker = () => fileInputRef.current?.click();
  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    onFilesSelected?.(files);
  };

  return (
    <section className="mx-auto mt-6 w-full max-w-[862px] px-4 sm:px-0">
      {/* Header */}
      <div className="mb-2">
        <p className="text-sm sm:text-base">
          <span className="text-[#6C5CE7] font-semibold">Hello </span>
          <span className="text-[#6C5CE7] font-semibold">Ankith,</span>
        </p>
        <h2 className="mt-1 text-[15px] sm:text-[16px] font-semibold text-gray-800">
          what solution are you looking to create?
        </h2>
      </div>

      {/* Textarea row */}
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          multiple
          onChange={handleFiles}
          aria-hidden="true"
        />

        {/* Fluid width, responsive min-height, no manual resize */}
        <textarea
          placeholder="Describe your app idea.."
          className="w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] rounded-2xl border-2 border-[#CDD4FE]
                     bg-white/70 text-gray-800 placeholder-gray-400 shadow-sm
                     pl-12 pr-4 pt-3 pb-12 outline-0 focus:ring-2 focus:ring-indigo-300
                     focus:border-indigo-400"
          aria-label="Describe your app idea"
          style={{ resize: "none" }}
        />

        {/* Attach button at bottom-left inside textarea */}
        <button
          type="button"
          onClick={openPicker}
          className="absolute left-2 bottom-2 inline-flex items-center justify-center
                     w-9 h-9 rounded-full bg-white/90 border border-gray-200
                     shadow-sm hover:shadow text-gray-700
                     focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label="Attach files"
          title="Attach files"
        >
          <FiPaperclip className="text-[18px]" />
        </button>
      </div>
    </section>
  );
}

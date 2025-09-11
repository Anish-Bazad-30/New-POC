// components/Choose.jsx
"use client";
import { FiChevronDown } from "react-icons/fi";
import { SiPython, SiReact, SiNextdotjs, SiAngular, SiHtml5, SiJavascript } from "react-icons/si";

export default function Choose({ onClick }) {
  return (
    <div
      className="inline-flex items-center justify-between
                 h-10 md:h-[51px]
                 bg-white rounded-[18px] md:rounded-[25px]
                 shadow-sm border-r-2 border-[#CDD4FE] pl-3 md:pl-4 pr-2 md:pr-3
                 sm:w-[420px] md:w-[460px] lg:w-[495px]"
      aria-label="Choose stack"
      role="group"
    >
      <div className="flex items-center gap-2 md:gap-3 text-[15px] md:text-[18px]">
        <SiPython className="text-[#2B9FD7]" aria-hidden="true" />
        <SiReact className="text-[#00D8FF]" aria-hidden="true" />
        <SiNextdotjs className="text-gray-700" aria-hidden="true" />
        <SiAngular className="text-[#DD0031]" aria-hidden="true" />
        <SiHtml5 className="text-[#E34F26]" aria-hidden="true" />
        <SiJavascript className="text-[#F7DF1E]" aria-hidden="true" />
      </div>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-1.5 md:gap-2
                   h-8 px-2.5 md:px-3 rounded-full bg-white
                   border border-gray-200 text-[12px] md:text-[14px] font-medium text-gray-800
                   shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-300"
        aria-haspopup="listbox"
        aria-expanded="false"
      >
        <span>Choose</span>
        <FiChevronDown className="text-[16px] md:text-[18px]" aria-hidden="true" />
      </button>
    </div>
  );
}

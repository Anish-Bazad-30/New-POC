// components/Navbar.jsx
"use client";
import { FiMenu, FiPhone, FiInfo } from "react-icons/fi";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="relative flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4">
      <button
        className="p-2 sm:p-3 text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <FiMenu className="text-xl sm:text-2xl" />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 font-bold text-lg sm:text-2xl text-black pointer-events-none select-none">
        LOGO
      </div>

      <div className="flex gap-2 sm:gap-3 ml-auto">
        <button className="bg-white p-2 sm:p-3 rounded-2xl shadow-md hover:shadow-lg" aria-label="Call">
          <FiPhone className="text-blue-500 text-xl sm:text-2xl" />
        </button>
        <button className="bg-white p-2 sm:p-3 rounded-2xl shadow-md hover:shadow-lg" aria-label="Info">
          <FiInfo className="text-blue-500 text-xl sm:text-2xl" />
        </button>
      </div>
    </nav>
  );
}

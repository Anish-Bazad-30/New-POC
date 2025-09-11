// app/page.tsx
"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EAE9FE] to-[#F8EDF7] overflow-x-hidden">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {isOpen && (
        <button
          aria-label="Close menu backdrop"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
        />
      )}

      <div
        className={`transform-gpu transition-transform duration-300 will-change-transform ${
          isOpen ? "md:translate-x-64" : "translate-x-0"
        }`}
      >
        <div className="px-3 sm:px-4">
          <div className="mx-auto w-full max-w-[862px]">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

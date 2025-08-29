"use client";
import Navbar from "../components/navBar";
import { useState } from "react";
import Sidebar from "../components/sideBar";
import MainContent from "../components/mainContent";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="flex min-h-screen bg-gradient-to-r from-[#EAE9FE]  to-[#F8EDF7]">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Main area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MainContent></MainContent>
        {/* <div className="p-6">
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-4 text-gray-700">
            When the sidebar opens, this content shifts right.
          </p>
        </div> */}
      </div>
    </div>
  );
}

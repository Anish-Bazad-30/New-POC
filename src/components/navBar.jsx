"use client";
import { useState } from "react";
import { FiMenu, FiPhone, FiInfo } from "react-icons/fi";

import Sidebar from "./sideBar";

export default function Navbar({ isOpen, setIsOpen }) {
  
  return (
    <nav className="flex items-center justify-between bg-transparent px-6 py-4 shadow-sm">
      <button
        className="p-3 text-gray-600 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu className="text-2xl" />
      </button>

      <div className="font-bold text-2xl text-black">LOGO</div>

      <div className="flex gap-3">
        <button className="bg-white p-3 rounded-2xl shadow-md hover:shadow-lg">
          <FiPhone className="text-blue-500 text-2xl" />
        </button>
        <button className="bg-white p-3 rounded-2xl shadow-md hover:shadow-lg">
          <FiInfo className="text-blue-500 text-2xl" />
        </button>
      </div>
    </nav>
  );
}
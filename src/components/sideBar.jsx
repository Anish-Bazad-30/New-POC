// components/Sidebar.jsx
"use client";
import { useEffect } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";

export default function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <aside
      role="dialog"
      aria-modal={isOpen ? true : undefined}
      aria-label="Sidebar navigation"
      className={`fixed top-0 left-0 h-dvh w-4/5 md:w-64 bg-white text-black shadow-lg z-40
                  transform-gpu transition-transform duration-300
                  ${isOpen ? "translate-x-0" : "-translate-x-full md:-translate-x-64"}`}
    >
      <div className="p-3 flex items-center justify-between border-b">
        <button
          aria-label="Close sidebar"
          className="p-2 text-gray-600 rounded-md hover:bg-gray-100 transition"
          onClick={onClose}
          title="Collapse"
        >
          <FiMenu className="text-xl" />
        </button>
        <div className="text-sm font-semibold text-gray-700">Menu</div>
        <div className="w-8" />
      </div>

      <div className="flex items-center px-4 py-3 border-b">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-3 py-2 border rounded-full text-sm outline-none"
        />
        <FiSearch className="ml-2 text-gray-500" />
      </div>

      <div className="p-4 overflow-y-auto">
        <h2 className="font-medium text-gray-700 mb-3">My workspace</h2>
        <div className="space-y-2">
          {Array(5)
            .fill("Hotel Booking App")
            .map((name, i) => (
              <div
                key={i}
                className="flex items-center px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  🛎
                </span>
                <span className="text-sm">{name}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-4 border-t">
        <p className="text-xs text-gray-500 mb-1">Tokens Utilized</p>
        <div className="flex justify-between items-center">
          <div className="flex-1 h-1 bg-gray-200 rounded-full mr-2">
            <div className="h-1 bg-blue-500 rounded-full w-[0%]" />
          </div>
          <span className="text-xs font-medium">0/32M</span>
        </div>
      </div>
    </aside>
  );
}

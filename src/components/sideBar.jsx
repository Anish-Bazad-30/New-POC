import { FiSearch, FiMenu } from "react-icons/fi";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg text-black transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
                className="p-3 text-gray-600 rounded-md hover:bg-gray-800 hover:text-gray transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FiMenu className="text-2xl" />
              </button>
        {/* Search Bar */}
        <div className="flex items-center p-4 border-b">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-3 py-2 border rounded-full text-sm outline-none"
          />
          <FiSearch className="ml-2 text-gray-500" />
        </div>

        {/* Workspace */}
        <div className="p-4">
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

        {/* Token Usage */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <p className="text-xs text-gray-500 mb-1">Tokens Utilized</p>
          <div className="flex justify-between items-center">
            <div className="flex-1 h-1 bg-gray-200 rounded-full mr-2">
              <div className="h-1 bg-blue-500 rounded-full w-[0%]"></div>
            </div>
            <span className="text-xs font-medium">0/32M</span>
          </div>
        </div>
      </div>

      {/* Overlay (click to close) */}
    {/* {isOpen && (
  <div
    className="fixed top-0 left-64 right-0 bottom-0 bg-black bg-opacity-20 z-40"
    onClick={onClose}
  ></div>
)} */}
    </>
  );
}
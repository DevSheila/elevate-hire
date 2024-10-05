import React from "react";
import {
  FiActivity,
  FiAlertOctagon,
  FiAnchor,
  FiAperture,
  FiCamera,
} from "react-icons/fi";

const HorizontalToolTabs = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-10 bg-transparent py-2 px-4 rounded-lg"
      style={{
        transform: "translateY(-5px)",
      }}
    >
      <div className="flex justify-between items-center bg-transparent py-2 px-4 rounded-lg">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-6 h-6 mr-2 rounded-full" // Adjusted size
            />
            <span className="text-white font-bold">Elevate Hire</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          {/* Buttons with responsive text */}
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            <FiActivity className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Layout</span>
            <span className="sm:hidden">L</span> {/* Shortened text for small screens */}
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            <FiActivity className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Fonts</span>
            <span className="sm:hidden">F</span> {/* Shortened text for small screens */}
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            <FiActivity className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Themes</span>
            <span className="sm:hidden">T</span> {/* Shortened text for small screens */}
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            <FiActivity className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Format</span>
            <span className="sm:hidden">Fo</span> {/* Shortened text for small screens */}
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            <FiActivity className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Download</span>
            <span className="sm:hidden">D</span> {/* Shortened text for small screens */}
          </button>
        </div>
        <div className="flex items-center">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            My Documents
          </button>
          <button className="ml-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalToolTabs;
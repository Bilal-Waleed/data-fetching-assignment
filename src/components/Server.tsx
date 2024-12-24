import React from "react";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 h-[80px] bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
      <div className="text-white px-4 md:px-10">
        <h1 className="font-serif text-2xl md:text-4xl font-semibold tracking-wide hover:text-pink-200 transition-all duration-300">
          Client and Server Side Data Fetching:
        </h1>
      </div>
    </div>
  );
}
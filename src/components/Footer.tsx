import React from 'react';

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-400 to-gray-400 py-8">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-wide mb-2">
          Assignment:7
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-black bg-white inline-block px-4 py-2 rounded-lg shadow-lg">
           Zeenat Somroo
        </p>
        <div className="mt-4">
          <a
            href="mailto:your-email@example.com"
            className="text-pink-200 hover:text-white transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
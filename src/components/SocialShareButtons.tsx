"use client";
import React from "react";

const SocialShareButtons = () => (
  <div className="p-10 text-white rounded-lg transform transition-transform duration-300 hover:scale-105">
    <h1 className="text-4xl font-black mb-6 text-center text-pink-400 neon-glow">
      Share <span className="text-cyan-500">This Recipe</span>
    </h1>
    <hr className="hr-animation" />
    <div className="flex justify-center space-x-4 mt-6">
      <a
        href="#"
        className="bg-blue-500 p-4 rounded-full text-white hover:scale-110"
      >
        Facebook
      </a>
      <a
        href="#"
        className="bg-light-blue-400 p-4 rounded-full text-white hover:scale-110"
      >
        Twitter
      </a>
      <a
        href="#"
        className="bg-pink-400 p-4 rounded-full text-white hover:scale-110"
      >
        Pinterest
      </a>
    </div>
  </div>
);

export default SocialShareButtons;

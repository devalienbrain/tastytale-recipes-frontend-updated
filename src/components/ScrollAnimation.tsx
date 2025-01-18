"use client";
import React, { useEffect } from "react";

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-black mb-6 text-center text-pink-400 neon-glow">
        Scroll <span className="text-cyan-500">Animation</span>
      </h1>
      <hr className="hr-animation" />
      <div className="fade-in opacity-0 transform translate-y-10 transition-all duration-700 mt-6">
        <p className="text-center text-lg">Content fades in as you scroll!</p>
      </div>
    </div>
  );
};

export default ScrollAnimation;

"use client";
import React from "react";

const popularTags = ["#Vegetarian", "#QuickMeals", "#Desserts", "#Healthy"];

const PopularTags = () => (
  <div className="p-10 text-white rounded-lg transform transition-transform duration-300 hover:scale-105">
    <h1 className="text-4xl font-black mb-6 text-center text-pink-400 neon-glow">
      Popular <span className="text-cyan-500">Tags</span>
    </h1>
    <hr className="hr-animation" />
    <div className="flex flex-wrap justify-center mt-6">
      {popularTags.map((tag) => (
        <span
          key={tag}
          className="m-2 px-4 py-2 bg-gray-800 rounded-lg text-cyan-400 hover:bg-gray-700 cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default PopularTags;

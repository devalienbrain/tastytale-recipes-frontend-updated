"use client";
import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "10 Quick & Easy Recipes for Busy Weeknights",
    summary: "Learn to cook delicious meals in under 30 minutes.",
    image: "https://i.ibb.co.com/09d0DMF/recipe3.jpg",
  },
  {
    id: 2,
    title: "Top 5 Vegetarian Dishes You'll Love",
    summary: "Explore our handpicked vegetarian recipes.",
    image: "https://i.ibb.co.com/2t3SB5q/massaman-curry.jpg",
  },
];

const BlogSection = () => (
  <div className="p-10 text-white rounded-lg transform transition-transform duration-300 hover:scale-105">
    <h1 className="text-4xl font-black mb-6 text-center text-pink-400 neon-glow">
      Latest <span className="text-cyan-500">Blogs</span>
    </h1>
    <hr className="hr-animation" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-opacity-90"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold text-cyan-400 mt-4">
            {post.title}
          </h3>
          <p className="text-sm text-gray-300 mt-2">{post.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

export default BlogSection;

"use client";
import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed successfully with ${email}`);
    setEmail("");
  };

  return (
    <div className="p-10 text-white rounded-lg transform transition-transform duration-300 hover:scale-105">
      <h1 className="text-4xl font-black mb-6 text-center text-pink-400 neon-glow">
        Stay <span className="text-cyan-500">Updated</span>
      </h1>
      <hr className="hr-animation" />
      <div className="flex flex-col items-center space-y-4 mt-6">
        <p className="text-center text-gray-300">
          Subscribe to our newsletter for the latest recipes and tips!
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="px-6 py-2 bg-pink-400 text-white rounded-lg shadow-lg transform hover:scale-105"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

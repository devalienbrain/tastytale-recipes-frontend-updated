"use client";
import React from "react";

const OfferSection = () => (
  <div className="p-10 text-white rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 transform transition-transform duration-300 hover:scale-105">
    <h1 className="text-4xl font-black mb-6 text-center">
      Limited Time <span className="text-gray-800">Offer</span>
    </h1>
    <p className="text-center text-lg">
      Get 50% off on Premium Membership! Offer ends in:
    </p>
    <div className="flex justify-center space-x-4 mt-6">
      <div className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg">
        02 <span className="text-sm">Days</span>
      </div>
      <div className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg">
        12 <span className="text-sm">Hours</span>
      </div>
      <div className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg">
        45 <span className="text-sm">Minutes</span>
      </div>
    </div>
  </div>
);

export default OfferSection;

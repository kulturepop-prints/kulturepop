"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

const labels = [
  "Video Games",
  "Anime",
  "Tech",
  "Fitness",
  "Music",
  "Movies",
  "Art",
  "Coding",
  "Travel",
  "Fashion",
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

const CollectionGrid = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`p-6 md:p-10 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 lg:mb-10">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-exo2-bolditalic transition-colors duration-300 ${
              isDark
                ? "text-white drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]"
                : "text-[#1f1f1f] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
            }`}
          >
            Top Tier Collections
          </h2>
          <p
            className={`mt-2 text-sm md:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore our curated categories and find your perfect poster
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {labels.map((label, i) => {
            const slug = slugify(label);

            return (
              <Link
                key={i}
                href={`/posters/${slug}`}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* Image Container */}
                <div
                  className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-300 ${
                    isDark
                      ? "shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
                      : "shadow-xl"
                  } group-hover:scale-110 group-hover:rotate-3`}
                >
                  <img
                    src={`/images/avatar${i + 1}.jpg`}
                    alt={`${label} collection`}
                    className="object-cover w-full h-full"
                  />

                  {/* Glassmorphism Overlay */}
                  <div
                    className={`absolute inset-0 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ${
                      isDark ? "bg-white/20" : "bg-white/10"
                    }`}
                  />

                  {/* Center Text on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs sm:text-sm md:text-base font-semibold text-center px-2">
                    <span className="drop-shadow-lg">
                      {label}
                      <br />
                      Posters
                    </span>
                  </div>
                </div>

                {/* Label (Hidden on Hover) */}
                <div
                  className={`mt-3 text-sm md:text-base font-medium transition-all duration-300 group-hover:opacity-0 flex items-center gap-1 ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {label}
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/collections"
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              isDark
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "bg-gray-900 text-white hover:bg-gray-800"
            } hover:scale-105 shadow-lg`}
          >
            View All Collections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionGrid;
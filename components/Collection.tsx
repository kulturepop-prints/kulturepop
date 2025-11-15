"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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

// Converts "Video Games" → "video-games"
const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Collection = () => {
  return (
    <div className="p-10 lg:flex items-center gap-x-10">
      <div className="text-lg md:text-3xl font-exo2-bolditalic mb-6 text-[#1f1f1f] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
  Top Tier Collection:
</div>


      <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-15 ">
        {labels.map((label, i) => {
          const slug = slugify(label);

          return (
            <Link
              key={i}
              href={`/posters/${slug}`}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-115 group-hover:rotate-2">
                <img
                  src={`/images/avatar${i + 1}.jpg`}
                  alt={`avatar-${i + 1}`}
                  className="object-cover w-full h-full"
                />

                {/* Glassmorphism */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Center text on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs md:text-sm font-semibold underline">
                  {label} Posters
                </div>
              </div>

              {/* Subheading (hidden on hover) */}
              <div className="mt-3 text-sm md:text-base font-medium transition-all duration-300 group-hover:opacity-0 flex items-center gap-1">
                {label}
                <ChevronRight size={16} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;

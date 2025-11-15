"use client";

import Carousel from "@/components/ui/carousel";
import Button from "@/components/ui/Button";
import { useTheme } from "@/lib/theme-context";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const slideData = [
    {
      title: "Iconic Anime Legends",
      button: "Explore Collection",
      src: "/images/poster1.jpg",
    },
    {
      title: "Epic Gaming Moments",
      button: "Shop Now",
      src: "/images/poster2.jpg",
    },
    {
      title: "Cinematic Masterpieces",
      button: "Discover More",
      src: "/images/poster3.jpg",
    },
    {
      title: "Music That Moves You",
      button: "View Gallery",
      src: "/images/poster4.jpg",
    },
  ];

  return (
    <section
      className={`relative flex flex-col items-center mt-10 pb-10 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Section Heading */}
      <div className="text-center px-4">
        <h1
          className={`font-exo2-blackitalic tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-colors duration-300 ${
            isDark
              ? "text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]"
              : "text-[#0a0a08] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
          }`}
        >
          Best of KulturePop
        </h1>
        <p
          className={`mt-4 text-sm md:text-base lg:text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Curated posters that transform your space into a reflection of your passions
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full flex justify-center items-center overflow-hidden p-6 md:p-10">
        <Carousel slides={slideData} />
      </div>

      {/* Optional CTA Section */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button variant="primary" size="lg">
          Shop All Collections
        </Button>
        <Button variant="outline" size="lg">
          Create Custom Poster
        </Button>
      </div>
    </section>
  );
}
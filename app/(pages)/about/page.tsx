"use client";

import { useTheme } from "@/lib/theme-context";
import { Heart, Palette, Truck, Shield } from "lucide-react";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description:
        "Every poster we curate comes from a love of art, culture, and self-expression.",
    },
    {
      icon: Palette,
      title: "Quality First",
      description:
        "Premium materials and vibrant printing ensure your posters look stunning for years.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Free shipping on orders over $50. Your art arrives safely and quickly.",
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description:
        "Not happy with your poster? We offer hassle-free returns within 30 days.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-exo2-blackitalic mb-6 ${
              isDark
                ? "text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]"
                : "text-gray-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
            }`}
          >
            Your Walls, Your Story
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            KulturePop was born from a love of art, pop culture, and
            self-expression. We believe your space should tell your story—whether
            it&apos;s your favorite anime character, a legendary album cover, or a
            breathtaking landscape.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        className={`py-16 px-4 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        } transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The KulturePop Journey
              </h2>
              <div className="space-y-4">
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  What started as a passion project in 2020 has grown into a
                  thriving community of pop culture enthusiasts. We noticed a gap
                  in the market—high-quality, affordable posters that truly
                  capture the essence of what fans love.
                </p>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  Every poster we curate is a piece of culture, ready to transform
                  your room into a reflection of who you are. From anime classics
                  to indie game masterpieces, we&apos;re here to help you express
                  yourself.
                </p>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  Today, we&apos;ve shipped over 50,000 posters to fans across the
                  globe. But we&apos;re just getting started.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-hero.jpg"
                alt="KulturePop workspace"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/poster1.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                    isDark
                      ? "bg-gray-700 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <value.icon size={28} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } leading-relaxed`}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 px-4 ${
          isDark ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-purple-50"
        } transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to Transform Your Space?
          </h2>
          <p
            className={`text-lg mb-8 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Join thousands of satisfied customers who&apos;ve brought their walls
            to life with KulturePop
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                isDark
                  ? "bg-white text-gray-900 hover:bg-gray-100"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              Shop Collections
            </a>
            <a
              href="/contact"
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 ${
                isDark
                  ? "border-white text-white hover:bg-white hover:text-gray-900"
                  : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
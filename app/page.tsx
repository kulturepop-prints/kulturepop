"use client";

import { useTheme } from "@/lib/theme-context";
import HeroSection from "@/components/sections/HeroSection";
import CollectionGrid from "@/components/sections/CollectionGrid";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Button from "@/components/ui/Button";
import { Sparkles, TruckIcon, Shield, HeadphonesIcon } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Museum-grade prints that last a lifetime",
    },
    {
      icon: TruckIcon,
      title: "Free Shipping",
      description: "On all orders over $50",
    },
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "Your payment is always protected",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "We're here to help anytime",
    },
  ];

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Features Bar */}
      <section
        className={`py-12 border-y transition-colors duration-300 ${
          isDark
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 ${
                    isDark
                      ? "bg-gray-700 text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
                      : "bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white"
                  }`}
                >
                  <feature.icon size={24} />
                </div>
                <h3
                  className={`text-sm md:text-base font-semibold mb-1 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-xs md:text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <CollectionGrid />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Testimonials Section */}
      <section
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-gradient-to-br from-purple-50 to-blue-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-exo2-bolditalic mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              What Our Customers Say
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Join thousands of happy poster collectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
                <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark ? "bg-gray-900 shadow-xl" : "bg-white shadow-lg"
                }`}
                >
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                    </div>

                    <div>
                    <h4
                        className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        {testimonial.name}
                    </h4>

                    <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                        ))}
                    </div>

                    {/* Location */}
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {testimonial.location}
                    </p>
                    </div>
                </div>

                <p
                    className={`italic ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    &quot;{testimonial.review}&quot;
                </p>
                </div>
            ))}
        </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className={`text-3xl md:text-4xl font-exo2-bolditalic mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Stay in the Loop
          </h2>
          <p
            className={`text-lg mb-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Get exclusive deals, new releases, and poster inspiration delivered to
            your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center">
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Enter your email"
              className={`flex-1 w-full px-6 py-3 rounded-full transition-colors ${
                isDark
                  ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500"
                  : "bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-500"
              } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
            <Button variant="primary" size="md" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p
            className={`text-xs mt-4 ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className={`py-16 border-t transition-colors duration-300 ${
          isDark
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "1000+", label: "Unique Designs" },
              { number: "4.9", label: "Average Rating" },
              { number: "100%", label: "Satisfaction Guaranteed" },
            ].map((stat, index) => (
              <div key={index}>
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${
                    isDark
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm md:text-base ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
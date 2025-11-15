"use client";

import React from "react";
import { useTheme } from "@/lib/theme-context";
import Button from "@/components/ui/Button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Demon Slayer - Tanjiro",
    category: "Anime",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 234,
    image: "/images/poster1.jpg",
    tag: "Best Seller",
    isNew: false,
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    category: "Gaming",
    price: 34.99,
    rating: 4.8,
    reviews: 189,
    image: "/images/poster2.jpg",
    tag: "New",
    isNew: true,
  },
  {
    id: 3,
    name: "Blade Runner 2049",
    category: "Movies",
    price: 27.99,
    originalPrice: 35.99,
    rating: 4.7,
    reviews: 156,
    image: "/images/poster3.jpg",
    tag: "Sale",
    isNew: false,
  },
  {
    id: 4,
    name: "Pink Floyd - Dark Side",
    category: "Music",
    price: 32.99,
    rating: 5.0,
    reviews: 312,
    image: "/images/poster4.jpg",
    tag: "Editor's Pick",
    isNew: false,
  },
  {
    id: 5,
    name: "Attack on Titan",
    category: "Anime",
    price: 29.99,
    rating: 4.9,
    reviews: 267,
    image: "/images/poster1.jpg",
    tag: "Trending",
    isNew: false,
  },
  {
    id: 6,
    name: "The Last of Us",
    category: "Gaming",
    price: 31.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 198,
    image: "/images/poster2.jpg",
    tag: "Sale",
    isNew: false,
  },
  {
    id: 7,
    name: "Interstellar",
    category: "Movies",
    price: 28.99,
    rating: 4.9,
    reviews: 423,
    image: "/images/poster3.jpg",
    tag: "Popular",
    isNew: false,
  },
  {
    id: 8,
    name: "Led Zeppelin",
    category: "Music",
    price: 30.99,
    rating: 4.7,
    reviews: 145,
    image: "/images/poster4.jpg",
    tag: "Classic",
    isNew: false,
  },
];

const FeaturedProducts = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleAddToCart = (productId: number) => {
    console.log("Added to cart:", productId);
    // Implement cart logic here
  };

  const handleToggleWishlist = (productId: number) => {
    console.log("Toggled wishlist:", productId);
    // Implement wishlist logic here
  };

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-exo2-bolditalic mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Posters
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Hand-picked favorites from our collection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className={`group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gray-800 shadow-xl"
                  : "bg-white shadow-lg"
              }`}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg";
                  }}
                />
                
                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    suppressHydrationWarning
                    onClick={() => handleAddToCart(product.id)}
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all transform hover:scale-110"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={20} />
                  </button>
                  <button
                    suppressHydrationWarning
                    onClick={() => handleToggleWishlist(product.id)}
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all transform hover:scale-110"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={20} />
                  </button>
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={
                      product.tag === "Sale"
                        ? "danger"
                        : product.tag === "New"
                        ? "success"
                        : "primary"
                    }
                    size="sm"
                  >
                    {product.tag}
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p
                  className={`text-xs font-semibold uppercase mb-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {product.category}
                </p>
                <h3
                  className={`font-semibold text-base mb-2 line-clamp-1 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span
                      className={`text-sm ml-1 font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {product.rating}
                    </span>
                  </div>
                  <span
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {formatCurrency(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span
                      className={`text-sm line-through ${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button variant="primary" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
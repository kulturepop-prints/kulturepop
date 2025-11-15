"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/lib/theme-context";
import { Search, X, TrendingUp } from "lucide-react";
import { COLLECTIONS } from "@/lib/constants";
import Link from "next/link";

const SearchBar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // Popular searches
  const popularSearches = [
    "Anime Posters",
    "Gaming Wall Art",
    "Movie Classics",
    "Music Legends",
    "Minimalist Art",
  ];

  // Filter collections based on query
  const filteredCollections = COLLECTIONS.filter((collection) =>
    collection.name.toLowerCase().includes(query.toLowerCase())
  );

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search posters..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className={`w-full md:w-96 px-4 py-2.5 pl-10 pr-10 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500"
              : "bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-500"
          } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
        />
        <Search
          size={20}
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Search Dropdown */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-2xl overflow-hidden z-50 ${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } border`}
        >
          {query ? (
            // Search Results
            <div className="p-4">
              {filteredCollections.length > 0 ? (
                <>
                  <p
                    className={`text-xs font-semibold uppercase mb-3 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Collections
                  </p>
                  <div className="space-y-1">
                    {filteredCollections.map((collection) => (
                      <Link
                        key={collection.slug}
                        href={`/posters/${collection.slug}`}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isDark
                            ? "hover:bg-gray-700"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Search
                          size={16}
                          className={isDark ? "text-gray-400" : "text-gray-500"}
                        />
                        <div className="flex-1">
                          <p
                            className={`font-medium ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {collection.name}
                          </p>
                          <p
                            className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {collection.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-8 text-center">
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    No results found for &quot;{query}&quot;
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Popular Searches
            <div className="p-4">
              <p
                className={`text-xs font-semibold uppercase mb-3 flex items-center gap-2 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <TrendingUp size={14} />
                Popular Searches
              </p>
              <div className="space-y-1">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => {
                      setQuery(search);
                      // In a real app, trigger search here
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      isDark
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
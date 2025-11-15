"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import Button from "@/components/ui/Button";
import {
  Menu,
  X,
  Sun,
  Moon,
  ShoppingCart,
  User,
  Search,
  ChevronDown,
  Home,
  Info,
  Mail,
  Package,
  Heart,
} from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const collections = [
    { name: "Anime", href: "/posters/anime" },
    { name: "Video Games", href: "/posters/video-games" },
    { name: "Movies", href: "/posters/movies" },
    { name: "Music", href: "/posters/music" },
    { name: "Tech", href: "/posters/tech" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 ${
        isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      } border-b transition-colors duration-300 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } hover:scale-105 transition-transform`}
          >
            <span className="font-exo2-blackitalic">KulturePop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className={`flex items-center gap-1.5 ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors font-medium`}
            >
              <Home size={18} />
              Home
            </Link>

            {/* Collections Dropdown */}
            <div className="relative group">
              <button
                suppressHydrationWarning
                className={`flex items-center gap-1.5 ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                } transition-colors font-medium`}
              >
                <Package size={18} />
                Collections
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                  isDark ? "bg-gray-800" : "bg-white"
                } overflow-hidden`}
              >
                <div className="py-2">
                  {collections.map((collection) => (
                    <Link
                      key={collection.href}
                      href={collection.href}
                      className={`block px-4 py-2.5 ${
                        isDark
                          ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      } transition-colors`}
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`flex items-center gap-1.5 ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors font-medium`}
            >
              <Info size={18} />
              About Us
            </Link>

            <Link
              href="/contact"
              className={`flex items-center gap-1.5 ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors font-medium`}
            >
              <Mail size={18} />
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              suppressHydrationWarning
              className={`p-2 rounded-lg ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-all hover:scale-105`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              suppressHydrationWarning
              className={`hidden sm:block p-2 rounded-lg ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-all hover:scale-105`}
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </button>

            <button
              suppressHydrationWarning
              className={`p-2 rounded-lg ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-all hover:scale-105 relative`}
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </button>

            <button
              suppressHydrationWarning
              className={`hidden sm:block p-2 rounded-lg ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-all hover:scale-105`}
              aria-label="User Account"
            >
              <User size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              suppressHydrationWarning
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  : "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t ${
            isDark
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          } animate-in slide-in-from-top duration-200`}
        >
          <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2.5 ${
                isDark ? "text-gray-300" : "text-gray-700"
              } hover:translate-x-1 transition-transform`}
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>

            <details className="group">
              <summary
                className={`flex items-center gap-3 py-2.5 cursor-pointer ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <Package size={20} />
                <span className="font-medium">Collections</span>
                <ChevronDown
                  size={18}
                  className="ml-auto group-open:rotate-180 transition-transform"
                />
              </summary>
              <div className="pl-9 space-y-2 mt-2 mb-2">
                {collections.map((collection) => (
                  <Link
                    key={collection.href}
                    href={collection.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1.5 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    } hover:translate-x-1 transition-transform`}
                  >
                    {collection.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2.5 ${
                isDark ? "text-gray-300" : "text-gray-700"
              } hover:translate-x-1 transition-transform`}
            >
              <Info size={20} />
              <span className="font-medium">About Us</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2.5 ${
                isDark ? "text-gray-300" : "text-gray-700"
              } hover:translate-x-1 transition-transform`}
            >
              <Mail size={20} />
              <span className="font-medium">Contact</span>
            </Link>

            <div className="pt-3 border-t border-gray-700">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 py-2.5 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                } hover:translate-x-1 transition-transform`}
              >
                <User size={20} />
                <span className="font-medium">My Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
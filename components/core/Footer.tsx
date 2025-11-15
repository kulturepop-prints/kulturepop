"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, COLLECTIONS } from "@/lib/constants";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "All Products", href: "/shop" },
      { name: "Best Sellers", href: "/shop/best-sellers" },
      { name: "New Arrivals", href: "/shop/new" },
      { name: "Sale", href: "/shop/sale" },
    ],
    help: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "FAQ", href: "/faq" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about#story" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark
          ? "bg-gray-900 border-gray-800"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className={`text-2xl font-bold mb-4 inline-block ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="font-exo2-blackitalic">KulturePop</span>
            </Link>
            <p
              className={`text-sm mb-6 leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Your walls, your vibe. Premium posters that bring your favorite
              fandoms to life. From anime to gaming, movies to music — we've got
              the art that speaks to you.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className={isDark ? "text-gray-400" : "text-gray-600"}
                />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className={`text-sm hover:underline ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className={isDark ? "text-gray-400" : "text-gray-600"}
                />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className={`text-sm hover:underline ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className={`mt-0.5 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {SITE_CONFIG.address}
                </span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Shop
            </h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Help
            </h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div
          className={`mt-12 pt-8 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="max-w-md">
            <h3
              className={`font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Stay Updated
            </h3>
            <p
              className={`text-sm mb-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Get the latest drops, exclusive deals, and insider news.
            </p>
            <div className="flex gap-2">
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-lg text-sm transition-colors ${
                  isDark
                    ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500"
                    : "bg-white text-gray-900 border-gray-300 focus:border-blue-500"
                } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
              <Button variant="primary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t ${
          isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © {currentYear} KulturePop. Made with{" "}
              <Heart
                size={14}
                className="inline text-red-500 fill-red-500"
              />{" "}
              for pop culture fans.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:scale-110 ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:scale-110 ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:scale-110 ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className={isDark ? "text-gray-700" : "text-gray-300"}>
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
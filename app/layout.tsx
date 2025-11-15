import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "./ClientProviders";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

export const metadata: Metadata = {
  title: "KulturePop - Premium Posters & Wall Art | Anime, Gaming & More",
  description:
    "Discover unique, high-quality posters from anime, gaming, movies, music, and pop culture.",
  keywords:
    "posters, wall art, anime posters, gaming posters, movie posters, music posters, pop culture art, room decor",
  authors: [{ name: "KulturePop Team" }],
  openGraph: {
    title: "KulturePop - Your Walls, Your Vibe",
    description:
      "Premium posters that bring your favorite fandoms to life.",
    type: "website",
    locale: "en_US",
    siteName: "KulturePop",
  },
  twitter: {
    card: "summary_large_image",
    title: "KulturePop - Premium Posters & Wall Art",
    description: "Elevate your space with iconic art.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">
        <ClientProviders>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
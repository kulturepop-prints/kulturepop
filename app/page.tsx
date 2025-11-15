import Image from "next/image";
import HeroComponent from "@/components/HeroComponent";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans relative overflow-hidden 
                 bg-[url('/images/wallpaper2.png')]  bg-cover bg-center bg-black bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/20 "></div>
      {/* Header */}
      <header
  className="m-5 p-8 rounded-4xl shadow-xl flex items-center justify-between
             text-gray-800 bg-white/20 backdrop-blur-xl border border-black/10 
             relative z-10"
>
        <div className="text-3xl font-exo2-extrabold tracking-wide text-black">KulturePop</div>

        <nav className="flex space-x-10 text-lg font-medium">
          <a href="#explore" className="hover:text-black hover:underline transition-colors">
            Explore
          </a>
          <a href="#trending" className="hover:text-black hover:underline transition-colors">
            Trending
          </a>
          <a href="#categories" className="hover:text-black hover:underline transition-colors">
            Categories
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 text-black font-exo2-bolditalic px-4 py-1.5 rounded-2xl  transition-all cursor-pointer shadow-md hover:scale-105 ">
            Register / Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <HeroComponent />

      <Collection/>
    </div>
  );
}

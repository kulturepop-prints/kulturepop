"use client";

import Carousel from "@/components/ui/carousel";

export default function HeroComponent() {
  const slideData = [
    {
      title: "Poster One",
      button: "Explore Now",
      src: "/images/poster1.jpg",
    },
    {
      title: "Poster Two",
      button: "Explore Now",
      src: "/images/poster2.jpg",
    },
    {
      title: "Poster Three",
      button: "Explore Now",
      src: "/images/poster3.jpg",
    },
    {
      title: "Poster Four",
      button: "Explore Now",
      src: "/images/poster4.jpg",
    },
  ];

  return (
    <section className="relative flex flex-col items-center mt-10 ">
      {/* Section Heading */}
      <h1 className="font-exo2-blackitalic tracking-wide text-4xl md:text-5xl text-[#0a0a08] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
        Best &nbsp;&nbsp;of&nbsp;&nbsp; KulturePop
      </h1>

      {/* Carousel Section */}
      <div className="relative w-full flex justify-center items-center overflow-hidden p-10">
        <div className="">
          <Carousel slides={slideData} />
        </div>

      </div>
    </section>
  );
}

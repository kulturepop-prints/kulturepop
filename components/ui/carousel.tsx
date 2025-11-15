"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { useTheme } from "@/lib/theme-context";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="perspective-[1200px] transform-3d">
      <li
        ref={slideRef}
        className={`flex flex-1 flex-col items-center justify-center relative text-center w-[95vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer transition-all duration-300 ease-in-out ${
          isDark ? "text-white" : "text-white"
        }`}
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
          opacity: current === index ? 1 : 0.7,
        }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-[1%] overflow-hidden transition-all duration-150 ease-out ${
            isDark ? "bg-gray-800" : "bg-[#1D1F2F]"
          }`}
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                isDark ? "bg-black/40" : "bg-black/30"
              }`}
            />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative drop-shadow-lg">
            {title}
          </h2>
          <div className="flex justify-center">
            <button
              className={`mt-6 px-6 py-3 w-fit mx-auto text-sm md:text-base font-semibold h-12 border-2 flex justify-center items-center rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg ${
                isDark
                  ? "bg-white text-gray-900 border-white hover:bg-gray-100"
                  : "bg-white text-black border-transparent hover:shadow-2xl"
              }`}
            >
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className={`w-10 h-10 md:w-12 md:h-12 flex items-center mx-2 justify-center rounded-full border-2 focus:outline-none transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
        isDark
          ? "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-white focus:border-white"
          : "bg-neutral-200 border-transparent text-neutral-600 hover:bg-white hover:border-gray-300 focus:border-[#6D64F7]"
      } ${type === "previous" ? "rotate-180" : ""}`}
      title={title}
      onClick={handleClick}
      aria-label={title}
    >
      <IconArrowNarrowRight className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  // Auto-advance slides every 5 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      className="relative w-[95vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <div className="pointer-events-auto">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />
        </div>

        <div className="pointer-events-auto">
          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              current === index
                ? isDark
                  ? "bg-white w-8 md:w-10"
                  : "bg-white w-8 md:w-10"
                : isDark
                ? "bg-gray-600 hover:bg-gray-400"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
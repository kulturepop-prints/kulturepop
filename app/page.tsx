import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen font-sans">

      <Image
        src="/images/pattern3.png"
        alt="Logo"
        width={400}
        height={300}
        className="-z-10"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/* <div className="absolute top-[10%] right-10 -translate-y-1/2 pointer-events-none"> */}
      {/* Circle 1 */}
      <Image
        src="/images/pattern4.png"
        alt="Pattern circle"
        height={400}
        width={400}
        className="-z-10 absolute w-72 h-72 opacity-70 right-[40%] top-[40%]"
      />

      {/* Circle 2 */}
      <Image
        src="/images/pattern4.png"
        alt="Pattern circle"
        height={400}
        width={400}
        className="-z-10 absolute w-72 h-72 opacity-50 right-[30%] top-[45%]"
      />

      {/* Circle 3 */}
      <Image
        src="/images/pattern4.png"
        alt="Pattern circle"
        height={400}
        width={400}
        className="-z-10 absolute w-72 h-72 opacity-30 right-[20%] top-[50%]"
      />
      {/* </div> */}
      <header className="m-10 flex items-center justify-between text-gray-900">
        {/* Left: Logo */}
        <div className="text-5xl font-bold text-black">KulturePop</div>

        {/* Center: Navigation Links */}
        <nav className="flex space-x-10 text-lg font-medium">
          <a href="#explore" className="hover:text-gray-700 transition-colors">
            Explore
          </a>
          <a href="#trending" className="hover:text-gray-700 transition-colors">
            Trending
          </a>
          <a href="#categories" className="hover:text-gray-700 transition-colors">
            Categories
          </a>
        </nav>

        {/* Right: Search + Auth Buttons */}
        <div className="flex items-center space-x-4 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-400 bg-gray-100 text-gray-900 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition-colors">
            Register / Login
          </button>
        </div>
      </header>
      <main className="flex justify-between items-center m-10 p-10 px-30">
        {/* Left Side: Text Content */}
        <div className="max-w-2xl tracking-widest text-gray-800 space-y-4">
          <h1 className="text-4xl font-bold">
            <span className="text-6xl text-black">KulturePop</span> gives you the best posters at the best prices.
          </h1>
          <p className="text-lg text-gray-600">
            India&apos;s largest poster collection — all under one website.
          </p>
        </div>

        {/* Right Side: Image + Explore Link */}
        <div className="flex flex-col items-center">
          <div className=" rounded-md overflow-hidden">
            <Image
              src="/images/cardstack.png"
              alt="Poster stack"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          <Link
            href="/explore"
            className="mt-4 flex items-center text-gray-800 hover:text-black hover:underline hover:decoration-dotted transition-colors"
          >
            Explore all posters
            <span className="ml-2 text-xl">→</span>
          </Link>
        </div>
      </main>

        <div className="flex justify-between items-center m-10 p-10 px-30">
<div className="text-3xl font-bold">

          COLLECTION
</div>
        </div>
    </div>
  );
}

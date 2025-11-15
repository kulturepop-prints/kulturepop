"use client";

import { useTheme } from "@/lib/theme-context";

export default function TailwindTestPage() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          🎨 Tailwind CSS Test Page
        </h1>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <p className="text-blue-900 dark:text-blue-100">
              ✅ If you see this styled with colors, Tailwind is working!
            </p>
          </div>

          <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
            <p className="text-green-900 dark:text-green-100">
              ✅ Current theme: <strong>{theme}</strong>
            </p>
          </div>

          <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
            <p className="text-yellow-900 dark:text-yellow-100">
              ✅ Dark mode classes: {isDark ? "Working" : "Working"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
          >
            Toggle Theme
          </button>
          
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105">
            Test Hover
          </button>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Typography Test
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Regular text with proper colors
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Small text with proper colors
          </p>
        </div>

        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <h3 className="text-red-900 dark:text-red-100 font-semibold mb-2">
            ⚠️ If this page looks plain (no colors):
          </h3>
          <ul className="text-red-800 dark:text-red-200 text-sm space-y-1 list-disc list-inside">
            <li>Tailwind CSS is NOT loading</li>
            <li>Check globals.css is imported in layout.tsx</li>
            <li>Check postcss.config.mjs exists</li>
            <li>Run: rm -rf .next && npm run dev</li>
          </ul>
        </div>

        <div className="mt-6 flex gap-2">
          <div className="w-10 h-10 bg-red-500 rounded"></div>
          <div className="w-10 h-10 bg-green-500 rounded"></div>
          <div className="w-10 h-10 bg-blue-500 rounded"></div>
          <div className="w-10 h-10 bg-yellow-500 rounded"></div>
          <div className="w-10 h-10 bg-purple-500 rounded"></div>
        </div>
        
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          If you see colored boxes above, Tailwind utilities are working ✅
        </p>
      </div>
    </div>
  );
}
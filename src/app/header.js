"use client"; // Mark as a Client Component for React hooks

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname(); // Hook to get the current path

  useEffect(() => {
    // Reset dropdown and other states when the route changes
    setDropdownOpen(false);
  }, [pathname]); // Runs whenever the route changes

  return (
    <header className="fixed top-0 left-0 w-full bg-dGrey text-gold shadow z-50 border-b-2 border-gold">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Title with Link to Home */}
        <Link href="/">
          <h1 className="text-gold text-2xl font-bold cursor-pointer">
            ICS4U Portfolio
          </h1>
        </Link>

        {/* Navigation Buttons */}
        <nav className="flex space-x-4">
          {/* Button 1 */}
          <Link href="/page1">
            <span className="px-4 py-2 bg-gold text-dGrey rounded hover:bg-dGrey hover:text-gold transition cursor-pointer">
              About Me
            </span>
          </Link>

          {/* Button 2 */}
          <Link href="/page2">
            <span className="px-4 py-2 bg-gold text-dGrey rounded hover:bg-dGrey hover:text-gold transition cursor-pointer">
              Projects
            </span>
          </Link>

          {/* Button 3 */}
          <Link href="/bib">
            <span className="px-4 py-2 bg-gold text-dGrey rounded hover:bg-dGrey hover:text-gold transition cursor-pointer">
              Bibliography
            </span>
          </Link>

          {/* Button 5 with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/page3">
              <span className="px-4 py-2 bg-gold text-dGrey rounded hover:bg-dGrey hover:text-gold transition cursor-pointer">
                Tutorials
              </span>
            </Link>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-gold border border-dGrey rounded shadow-md">
                <Link href="/demo1">
                  <span className="block px-4 py-2 text-dGrey hover:bg-dGold hover:text-dGrey cursor-pointer">
                    Tutorial 1
                  </span>
                </Link>
                <Link href="/demo2">
                  <span className="block px-4 py-2 text-dGrey hover:bg-dGold hover:text-dGrey cursor-pointer">
                    Tutorial 2
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/bibliography">
            <span className="px-4 py-2 bg-gold text-dGrey rounded hover:bg-dGrey hover:text-gold transition cursor-pointer">
              Bibliography
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

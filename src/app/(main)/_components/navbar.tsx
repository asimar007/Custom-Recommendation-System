"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Branding Section */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo1.png" alt="Logo" width={80} height={80} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6 text-white" />
          ) : (
            <HiMenu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 space-y-2 bg-gray-900 md:flex-row md:space-y-0 md:space-x-8 md:mt-0">
            <li>
              <Link
                href="/add-video"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-gray-900 md:border-0 md:p-0"
              >
                Upload Video
              </Link>
            </li>
            <li>
              <Link
                href="/video-search"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-gray-900 md:border-0 md:p-0"
              >
                Video Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

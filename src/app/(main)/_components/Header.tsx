"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { BsYoutube, BsBell, BsSearch } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import CircleLoader from "react-spinners/ClipLoader";
import Image from "next/image";

interface HeaderProps {
  search: string;
  isSearching: boolean;
  isLoading: boolean;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

export const Header = ({
  search,
  isSearching,
  isLoading,
  onSearchChange,
  onSearch,
  onClear,
}: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900 z-50 border-b border-gray-700">
      <div className="max-w-[2100px] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left Section */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-800 rounded-full"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6 text-white" />
              ) : (
                <HiMenu className="h-6 w-6 text-white" />
              )}
            </button>
            <Link href="/" className="flex items-center ml-4 space-x-1">
              <BsYoutube className="h-6 w-6 text-red-600" />
              <span className="text-white font-medium text-xl">RecSys</span>
            </Link>
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-[720px] mx-8">
            <div className="flex w-full max-w-[600px]">
              <div className="flex-1 flex items-center">
                <Input
                  type="text"
                  placeholder="Search videos..."
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-gray-800 border-gray-700 rounded-l-full py-2 pl-6 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button
                onClick={isSearching ? onClear : onSearch}
                variant="secondary"
                className="px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-r-full border-l border-gray-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircleLoader size={20} color="#ffffff" />
                ) : (
                  <BsSearch className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/add-video"
              className="hidden md:flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-full text-white"
            >
              <RiVideoAddLine className="h-6 w-6" />
            </Link>
            <button className="hidden md:flex p-2 hover:bg-gray-800 rounded-full text-white">
              <BsBell className="h-6 w-6" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/avatar.png"
                alt="User avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex items-center mb-4">
              <Input
                type="text"
                placeholder="Search videos..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1 bg-gray-800 text-white border-gray-700 rounded-l-full"
              />
              <Button
                onClick={isSearching ? onClear : onSearch}
                variant="secondary"
                className="px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-r-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircleLoader size={20} color="#ffffff" />
                ) : (
                  <BsSearch className="h-5 w-5" />
                )}
              </Button>
            </div>
            <Link
              href="/add-video"
              className="flex items-center space-x-3 p-2 text-white hover:bg-gray-800 rounded-lg"
            >
              <RiVideoAddLine className="h-6 w-6" />
              <span>Upload Video</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

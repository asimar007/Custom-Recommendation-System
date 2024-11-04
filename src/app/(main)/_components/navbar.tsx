import { Search } from "lucide-react";
import React from "react";
import Link from "next/link"; // Import Link from Next.js

export const Navbar = () => {
  return (
    <div className="mb-4 h-16 w-full flex items-center justify-between px-4">
      <div className="h-full flex items-center">
        <h1 className="text-2xl font-bold">Video Search</h1>
        <Search className="ml-2" />
      </div>
      <div className="flex gap-4">
        <Link href="/add-video">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Video
          </button>
        </Link>
        <Link href="/video-search">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Video Search
          </button>
        </Link>
      </div>
    </div>
  );
};

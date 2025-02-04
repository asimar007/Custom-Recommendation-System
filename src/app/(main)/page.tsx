"use client";

import { useAction, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import VideoCard from "./_components/video-card";
import Link from "next/link";
import { Navbar } from "./_components/navbar";
import CircleLoader from "react-spinners/ClipLoader";
import { useState, KeyboardEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Video {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const Page = () => {
  const videos = useQuery(api.video.allVideos);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const vidSearch = useAction(api.video.similarVideos);

  // Add loading state
  const [isLoading, setIsLoading] = useState(false);

  // Add debounced real-time search
  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (search.length < 1) {
        setIsSearching(false);
        setSearchResults([]);
        return;
      }
      try {
        setIsSearching(true);
        setIsLoading(true);
        const results = await vidSearch({ query: search });
        if (results) {
          setSearchResults(results);
        }
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [search, vidSearch]);

  // Update handleSearch with error handling
  const handleSearch = async () => {
    if (search.length < 1) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }
    try {
      setIsSearching(true);
      setIsLoading(true);
      const results = await vidSearch({ query: search });
      if (results) {
        setSearchResults(results);
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Update the button to show loading state
  <Button
    onClick={handleSearch}
    variant="secondary"
    className="bg-pink-500 hover:bg-pink-600 text-white"
    disabled={isLoading}
  >
    {isLoading ? (
      <CircleLoader size={20} color="#ffffff" />
    ) : isSearching ? (
      "Clear"
    ) : (
      "Search"
    )}
  </Button>;

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (videos === undefined) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <CircleLoader color="#f9f1f1" size={60} />
      </div>
    );
  }
  if (videos === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-2xl font-semibold">Videos not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto px-4 py-8 pt-28">
        {/* Search Section */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <Input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            className="max-w-md bg-gray-800 text-white border-gray-700"
          />
          <Button
            onClick={handleSearch}
            variant="secondary"
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            {isSearching ? "Clear" : "Search"}
          </Button>
        </div>

        {/* Display search results or all videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isSearching && searchResults.length === 0 && !isLoading ? (
            <div className="col-span-full text-center text-gray-400">
              No videos found for &quot;{search}&quot;
            </div>
          ) : isSearching && searchResults.length > 0 ? (
            searchResults.map((video) => (
              <Link
                href={`/videos/${video._id}`}
                key={video._id}
                className="group"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 transform group-hover:scale-105 hover:shadow-2xl">
                  <VideoCard
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                  />
                </div>
              </Link>
            ))
          ) : (
            videos.map((video) => (
              <Link
                href={`/videos/${video._id}`}
                key={video._id}
                className="group"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 transform group-hover:scale-105 hover:shadow-2xl">
                  <VideoCard
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                  />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

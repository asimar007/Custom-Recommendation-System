"use client";

import { useAction, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import CircleLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { Header } from "./(main)/_components/Header";
import { Hero } from "./(main)/_components/Hero";
import { Footer } from "./(main)/_components/Footer";

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
  const [isLoading, setIsLoading] = useState(false);

  const vidSearch = useAction(api.video.similarVideos);

  const handleSearch = async () => {
    if (!search.trim()) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    setIsLoading(true);
    try {
      const results = await vidSearch({ query: search });
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setSearch("");
    setIsSearching(false);
    setSearchResults([]);
  };

  if (videos === undefined) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <CircleLoader color="#f9f1f1" size={60} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header
        search={search}
        isSearching={isSearching}
        isLoading={isLoading}
        onSearchChange={(value) => setSearch(value)}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <main className="flex-1 pt-20">
        <Hero
          videos={videos || []}
          searchResults={searchResults}
          isSearching={isSearching}
          isLoading={isLoading}
          searchQuery={search}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Page;

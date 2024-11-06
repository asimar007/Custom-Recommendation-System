"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import VideoCard from "./_components/video-card";
import Link from "next/link";
import { Navbar } from "./_components/navbar";
import CircleLoader from "react-spinners/ClipLoader";

const Page = () => {
  const videos = useQuery(api.video.allVideos);

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
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-6">
          Explore Our Videos
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Discover our collection of informative and engaging video content.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

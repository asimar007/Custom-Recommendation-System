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
      <div className="flex items-center justify-center h-screen">
        <CircleLoader color="#f9f1f1" size={60} />
      </div>
    );
  }
  if (videos === null) {
    return <div>Videos not found</div>;
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center pt-16">
      <Navbar />
      <div className="mt-9"></div>
      <div className="w-full max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">All Videos</h1>
        <div className="grid grid-cols-1 gap-4">
          {videos.map((video, index) => (
            <Link href={`/videos/${video._id}`} key={index}>
              <VideoCard
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

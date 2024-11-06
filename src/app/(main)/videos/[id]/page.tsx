"use client";

import { useAction, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import Image from "next/image";
import VideoCard from "../../_components/video-card";
import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { video } from "../../_components/video-search";
import BounceLoader from "react-spinners/BounceLoader";
import { Navbar } from "../../_components/navbar";

const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const video = useQuery(api.video.getVideo, {
    id: params.id as Id<"videos">,
  });

  const [videos, setVideos] = useState<video[]>([]);
  const [expanded, setExpanded] = useState(false);

  const vidSearch = useAction(api.video.similarVideos);

  useEffect(() => {
    if (video) {
      vidSearch({
        query: video?.title as string,
      }).then((res) => {
        setVideos(res);
      });
    }
  }, [video, vidSearch]);

  if (video === undefined) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <BounceLoader color="#f9f1f1" size={60} />
      </div>
    );
  }
  if (video === null) {
    return <div>Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-32 px-4 flex flex-col lg:flex-row gap-6">
        {/* Left Side: Video Section */}
        <div className="relative w-full lg:w-2/3 mb-6 lg:mb-0">
          {/* Thumbnail Section */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <PlayIcon className="w-12 h-12 text-white" />
            </div>
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={1280}
              height={720}
              className="rounded-lg"
            />
          </div>

          {/* Video Title Section */}
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{video.title}</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {expanded
                ? video.description
                : `${video.description.slice(0, 100)}...`}{" "}
              {/* description */}
              <button
                className="text-blue-500 ml-1"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>

        {/* Right Side: Upcoming Video Section */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Upcoming Video</h2>
          <div>
            {videos === undefined && (
              <p className="text-sm text-muted-foreground">
                Loading related videos...
              </p>
            )}
            {videos?.length > 0 &&
              videos
                .slice(1)
                .map((video, index) => (
                  <VideoCard
                    key={index}
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

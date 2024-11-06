import React from "react";
import { Navbar } from "../_components/navbar";
import { VideoSearch } from "../_components/video-search";

const VideoSearchPage = () => {
  return (
    <div className=" bg-gray-900 h-screen w-screen flex flex-col items-center pt-16">
      <Navbar />
      <div className="mt-20">
        <VideoSearch />
      </div>
    </div>
  );
};

export default VideoSearchPage;

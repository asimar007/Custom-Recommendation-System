import React from "react";
import { Navbar } from "../_components/navbar";
import { VideoSearch } from "../_components/video-search";

const VideoSearchPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center pt-16">
      <Navbar />
      <div className="mt-9">
        <VideoSearch />
      </div>
    </div>
  );
};

export default VideoSearchPage;

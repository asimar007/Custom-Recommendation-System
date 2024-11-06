"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAction } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { Navbar } from "../_components/navbar";

const AddVideoPage = () => {
  const addVideo = useAction(api.video.addVideo);

  const [video, setVideo] = useState({
    title: "",
    url: "",
    description: "",
    thumbnail: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addVideo(video);
      console.log("Video added successfully");
      alert("Video Added");
      setVideo({
        title: "",
        url: "",
        description: "",
        thumbnail: "",
        category: "",
      });
    } catch (err) {
      console.error("Error adding video:", err);
      alert("Upload error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="pt-24 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Add a New Video
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Title"
              name="title"
              value={video.title}
              onChange={handleChange}
              required
              className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
            <Input
              type="url"
              placeholder="Video URL"
              name="url"
              value={video.url}
              onChange={handleChange}
              required
              className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
            <Input
              type="text"
              placeholder="Description"
              name="description"
              value={video.description}
              onChange={handleChange}
              required
              className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
            <Input
              type="url"
              placeholder="Thumbnail URL"
              name="thumbnail"
              value={video.thumbnail}
              onChange={handleChange}
              required
              className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
            <Input
              type="text"
              placeholder="Category"
              name="category"
              value={video.category}
              onChange={handleChange}
              required
              className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
            <Button
              type="submit"
              disabled={!addVideo}
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-semibold"
            >
              Add Video
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVideoPage;

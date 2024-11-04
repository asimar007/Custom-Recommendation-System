"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAction } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../convex/_generated/api";

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Video</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={video.title}
          onChange={handleChange}
          required
        />
        <Input
          type="url"
          placeholder="Video URL"
          name="url"
          value={video.url}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Description"
          name="description"
          value={video.description}
          onChange={handleChange}
          required
        />
        <Input
          type="url"
          placeholder="Thumbnail URL"
          name="thumbnail"
          value={video.thumbnail}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Category"
          name="category"
          value={video.category}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={!addVideo}>
          Add Video
        </Button>
      </form>
    </div>
  );
};

export default AddVideoPage;

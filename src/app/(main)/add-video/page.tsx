"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAction } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { Header } from "../_components/Header";
import { FaYoutube, FaImage, FaListAlt, FaUpload } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddVideoPage = () => {
  const router = useRouter();
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
      toast.success("Video added successfully!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#4B5563",
          color: "#fff",
        },
      });
      setVideo({
        title: "",
        url: "",
        description: "",
        thumbnail: "",
        category: "",
      });
      // Redirect to home page after 1 second
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      console.error("Error adding video:", err);
      toast.error("Failed to upload video", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
        },
      });
    }
  };

  const formFields = [
    {
      icon: FaListAlt,
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Add a title that describes your video",
    },
    {
      icon: FaYoutube,
      name: "url",
      label: "Video URL",
      type: "url",
      placeholder: "Enter the video URL (e.g., YouTube link)",
    },
    {
      icon: FaListAlt,
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Tell viewers about your video",
    },
    {
      icon: FaImage,
      name: "thumbnail",
      label: "Thumbnail URL",
      type: "url",
      placeholder: "Enter the thumbnail image URL",
    },
    {
      icon: FaListAlt,
      name: "category",
      label: "Category",
      type: "text",
      placeholder: "Add a category (e.g., Music, Gaming, Education)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Toaster />
      <Header
        search=""
        isSearching={false}
        isLoading={false}
        onSearchChange={() => {}}
        onSearch={() => {}}
        onClear={() => {}}
      />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-gray-700"
        >
          <div className="p-8 sm:p-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-center mb-10 text-white flex items-center justify-center"
            >
              <FaUpload className="mr-3 text-blue-500" /> Upload New Video
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="space-y-2 group"
                >
                  <label className="text-sm font-medium text-gray-300 flex items-center">
                    <field.icon className="mr-2 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    {field.label}
                  </label>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={video[field.name as keyof typeof video]}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg transition-all duration-300 hover:bg-gray-700/70"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  type="submit"
                  disabled={!addVideo}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <FaUpload className="mr-2" />
                  <span>Upload Video</span>
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AddVideoPage;

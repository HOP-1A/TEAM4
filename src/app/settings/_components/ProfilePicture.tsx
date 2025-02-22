"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { useState } from "react";

export default function ProfilePicture({}) {
  const [images, setImages] = useState<FileList | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const uploadImages = async () => {
    console.log("working Upload");
    if (!images) return;

    const uploadPromises = Array.from(images).map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "Taivan");
      formData.append("cloud_name", "daepguvpo");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/daepguvpo/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const result = await response.json();
      return result.secure_url;
    });

    const uploadedUrl = await Promise.all(uploadPromises);

    setUploadedImages(uploadedUrl.filter((url) => url !== null) as string[]);
  };
  return (
    <div className="w-full flex gap-3">
      <Avatar className="h-28 w-28 bg-black border-black">
        <AvatarImage src={uploadedImages[0]} className="z-0"></AvatarImage>
        <AvatarFallback>
          <img
            src="https://res.cloudinary.com/daepguvpo/image/upload/v1740038020/q0n08koudrs32ecw6ufp.avif"
            alt="IMG"
          />
        </AvatarFallback>
      </Avatar>
      <div className="flex items-center justify-center w-1/6">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG
            </p>
          </div>
          <input
            id="dropzone-file"
            className="hidden"
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                setImages(files);
              }
            }}
            // onClick={uploadImages}
          />
        </label>
      </div>
      <button
        className="text-blue-500 h-16 w-24 flex gap-2 border-2 border-blue-500 rounded-xl p-1 justify-center items-center"
        onClick={uploadImages}
      >
        Upload
      </button>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

const PhotoLibrary = ({ setImage, hidePhotoLibrary }) => {
  const images = [
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/6.png",
    "/avatars/7.png",
    "/avatars/8.png",
    "/avatars/9.png",
  ];

  return (
    <div className="top-0 left-0 fixed flex justify-center items-center w-full h-full max-h-[100vh] max-w=[100vw]">
      <div className="gap-6 bg-gray-900 p-4 rounded-lg w-max h-max">
        <div
          className="flex justify-end items-end p-2 cursor-pointer"
          onClick={() => hidePhotoLibrary(false)}
        >
          <IoClose className="w-10 h-10 cursor-pointer" />
        </div>
        <div className="justify-center items-center gap-16 grid grid-cols-3 p-20 w-full">
          {images.map((image, index) => (
            <div
              onClick={() => {
                setImage(images[index]);
                hidePhotoLibrary(false);
              }}
            >
              <div className="relative w-24 h-24 cursor-pointer">
                <Image src={image} alt="avatar" fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoLibrary;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./contextMenu";
import PhotoPicker from "./photoPicker";
import PhotoLibrary from "./photoLibrary";
import CapturePhoto from "./capturePhoto";

const Avatar = ({ type, image, setImage }) => {
  const [hover, setHover] = useState(false);
  const [grabPhoto, setGrabPhoto] = useState(false);
  const [showPhotoLibrary, setShowPhotoLibrary] = useState(false);
  const [showCapturePhoto, setShowCapturePhoto] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (grabPhoto) {
      const data = document.getElementById("photoPicker");
      data.click();
      document.body.onfocus = (e) => {
        setTimeout(() => {
          setGrabPhoto(false);
        }, 1000);
      };
    }
  });

  const contextMenuOptions = [
    {
      name: "Take Photo",
      callback: () => {
        setShowCapturePhoto(true);
      },
    },
    {
      name: "Choose from library",
      callback: () => {
        setShowPhotoLibrary(true);
      },
    },
    {
      name: "Upload Photo",
      callback: () => {
        setGrabPhoto(true);
      },
    },
    {
      name: "Remove Photo",
      callback: () => {
        setImage("/defaultAvatar.png");
      },
    },
  ];

  const photoPickerChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const data = document.createElement("img");

    reader.onload = (e) => {
      data.src = e.target.result || null;
      data.setAttribute("data-src", e.target.result);
    };

    reader.readAsDataURL(file);
    setTimeout(() => {
      setImage(data.src);
    }, 100);
  };

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuVisible(true);
    setContextMenuCoordinates({ x: e.pageX, y: e.pageY });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {type === "sm" && (
          <div className="relative w-10 h-10">
            {image && (
              <Image
                src={image}
                alt="avatar"
                className="rounded-full"
                fill
                sizes="10"
              />
            )}
          </div>
        )}
        {type === "lg" && (
          <div className="relative w-14 h-14">
            <Image
              src={image}
              alt="avatar"
              className="rounded-full"
              fill
              sizes="10"
            />
          </div>
        )}
        {type === "xl" && (
          <div
            className="z-0 relative cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`bg-photopicker-overlay-background top-0 left-0 z-10 absolute flex flex-col justify-center items-center gap-2 rounded-full w-40 h-40 md:w-60 md:h-60 text-center ${
                hover ? "visible" : "hidden"
              }`}
              id="contextOpener"
              onClick={(e) => showContextMenu(e)}
            >
              <FaCamera
                className="text-2xl"
                id="contextOpener"
                onClick={(e) => showContextMenu(e)}
              />
              <span id="contextOpener" onClick={(e) => showContextMenu(e)}>
                Change
                <br />
                profile
                <br />
                photo
              </span>
            </div>
            <div className="flex justify-center items-center w-40 md:w-60 h-40 md:h-60">
              <Image
                src={image}
                alt="avatar"
                className="rounded-full"
                fill
                sizes=""
              />
            </div>
          </div>
        )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          options={contextMenuOptions}
          coordinates={contextMenuCoordinates}
          contextMenu={isContextMenuVisible}
          setContextmenu={setIsContextMenuVisible}
        />
      )}

      {showCapturePhoto && (
        <CapturePhoto
          setImage={setImage}
          hideCapturePhoto={setShowCapturePhoto}
        />
      )}

      {showPhotoLibrary && (
        <PhotoLibrary
          setImage={setImage}
          hidePhotoLibrary={setShowPhotoLibrary}
        />
      )}

      {grabPhoto && <PhotoPicker onChange={photoPickerChange} />}
    </>
  );
};

export default Avatar;

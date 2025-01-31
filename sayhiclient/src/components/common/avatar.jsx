import React, { useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./contextMenu";

const Avatar = ({ type, image, setImage }) => {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const contextMenuOptions = [
    { name: "Take Photo", callback: () => {} },
    { name: "Choose from library", callback: () => {} },
    { name: "Upload Photo", callback: () => {} },
    { name: "Remove Photo", callback: () => {} },
  ];

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
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className="relative w-14 h-14">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative z-0 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`bg-photopicker-overlay-background top-0 left-0 z-10 absolute flex flex-col justify-center items-center gap-2 rounded-full w-60 h-60 text-center ${
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
            <div className="flex justify-center items-center w-60 h-60">
              <Image src={image} alt="avatar" className="rounded-full" fill />
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
    </>
  );
};

export default Avatar;

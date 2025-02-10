import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const CapturePhoto = ({ setImage, hideCapturePhoto }) => {
  const videoRef = useRef(null);

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 300, 150);
    setImage(canvas.toDataURL("image/jpeg"));
    hideCapturePhoto(false);
  };

  useEffect(() => {
    let stream;
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;
    };
    startCamera();
    return () => {
      stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div className="top-1/4 left-1/3 absolute flex justify-center items-center gap-3 bg-gray-900 pt-2 rounded-lg w-2/6 h-4/6">
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div
          className="flex justify-end items-end p-2 cursor-pointer"
          onClick={() => hideCapturePhoto(false)}
        >
          <IoClose className="w-10 h-10 cursor-pointer" />
        </div>
        <div className="flex justify-center">
          <video id="video" width={400} autoPlay ref={videoRef}></video>
        </div>
        <button
          className="bg-white mb-10 p-2 border-8 border-teal-light rounded-full w-16 h-16 cursor-pointer"
          onClick={capturePhoto}
        ></button>
      </div>
    </div>
  );
};

export default CapturePhoto;

import Image from "next/image";
import React from "react";

const Empty = () => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center gap-6 bg-panel-header-background border-1 border-conversation-border border-b-4 border-b-icon-green w-full h-screen">
      <div className="flex justify-center items-center gap-2 text-white">
        <Image src="/sayhi.gif" alt="SayHi" width={300} height={300} />
        <span className="text-6xl md:text-7xl">SayHi</span>
      </div>
    </div>
  );
};

export default Empty;

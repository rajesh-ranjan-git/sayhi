import React from "react";
import Avatar from "../common/avatar";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatHeader = () => {
  return (
    <div className="z-10 flex justify-between items-center bg-panel-header-background px-4 py-3 h-16">
      <div className="flex justify-center items-center gap-6">
        <Avatar type="sm" image={"/profile"} />
        <div className="flex flex-col">
          <span className="text-primary-strong">Rajesh Ranjan</span>
          <span className="text-secondary text-sm">Online/Offline</span>
        </div>
      </div>
      <div className="flex gap-6">
        <MdCall className="text-panel-header-icon text-xl cursor-pointer" />
        <IoVideocam className="text-panel-header-icon text-xl cursor-pointer" />
        <BiSearchAlt2 className="text-panel-header-icon text-xl cursor-pointer" />
        <BsThreeDotsVertical className="text-panel-header-icon text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;

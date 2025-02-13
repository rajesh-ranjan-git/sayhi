import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";

const MessageBar = () => {
  return (
    <div className="relative flex items-center gap-6 bg-panel-header-background px-4 h-20">
      <>
        <div className="flex gap-6">
          <BsEmojiSmile className="text-panel-header-icon" title="Emoji" />
          <ImAttachment
            className="text-panel-header-icon"
            title="Attach File"
          />
        </div>
        <div className="flex items-center rounded-lg w-full h-10">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-input-background px-5 py-4 rounded-lg focus:outline-none w-full h-10 text-white text-sm"
          />
        </div>
        <div className="flex justify-center items-center w-10">
          <button>
            <MdSend className="text-panel-header-icon" title="Send message" />
            {/* <FaMicrophone className="text-panel-header-icon" title="Record" /> */}
          </button>
        </div>
      </>
    </div>
  );
};

export default MessageBar;

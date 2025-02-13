import React from "react";

const ChatContainer = () => {
  return (
    <div className="relative flex-grow custom-scrollbar w-full h-[80vh] overflow-auto">
      <div className="top-0 left-0 z-0 fixed bg-chat-background bg-fixed opacity-5 w-full h-full"></div>
      <div className="flex w-full">
        <div className="flex flex-col justify-end gap-1 w-full overflow-auto"></div>
      </div>
    </div>
  );
};

export default ChatContainer;

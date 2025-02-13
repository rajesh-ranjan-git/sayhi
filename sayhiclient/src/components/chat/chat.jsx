import React from "react";
import ChatHeader from "./chatHeader";
import ChatContainer from "./chatContainer";
import MessageBar from "./messageBar";

const Chat = () => {
  return (
    <div className="z-10 flex flex-col bg-conversation-panel-background border-conversation-border border-l w-full h-[100vh]">
      <ChatHeader />
      <ChatContainer />
      <MessageBar />
    </div>
  );
};

export default Chat;

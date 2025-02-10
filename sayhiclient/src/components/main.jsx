import React from "react";
import ChatList from "./chatlist/chatList";
import Empty from "./empty";

const Main = () => {
  return (
    <>
      <div className="grid grid-cols-main w-screen max-w-full h-screen max-h-screen overflow-hidden">
        <ChatList />
        <Empty />
      </div>
    </>
  );
};

export default Main;

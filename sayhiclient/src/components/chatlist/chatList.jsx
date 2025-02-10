import React from "react";
import ChatListHeader from "./chatListHeader";
import SearchBar from "./searchBar";
import List from "./list";

const ChatList = () => {
  return (
    <div className="z-20 flex flex-col bg-panel-header-background max-h-screen">
      <ChatListHeader />
      <SearchBar />
      <List />
    </div>
  );
};

export default ChatList;

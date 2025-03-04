import ChatListItem from "@/components/chat/chatListItem";

const ChatList = () => {
  return (
    <div className="flex items-center w-full h-[85.8vh] text-white">
      <div className="flex flex-col items-center gap-2 px-3 w-full h-full overflow-x-clip overflow-y-scroll">
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  );
};

export default ChatList;

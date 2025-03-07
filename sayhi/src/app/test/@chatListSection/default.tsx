import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import ChatListTopNavbar from "@/components/navbar/chatListTopNavbar";
import ChatListSearchbar from "@/components/searchbar/chatListSearchbar";

const ChatListSection = () => {
  return (
    <section className="bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full md:w-[40vw] h-full">
      <ChatListTopNavbar />
      <ChatListSearchbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default ChatListSection;

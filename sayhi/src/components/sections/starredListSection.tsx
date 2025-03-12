import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import StarredListTopNavbar from "@/components/navbar/starredListTopNavbar";
import ChatListSearchbar from "@/components/searchbar/chatListSearchbar";

const StarredListSection = () => {
  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <StarredListTopNavbar />
      <ChatListSearchbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default StarredListSection;

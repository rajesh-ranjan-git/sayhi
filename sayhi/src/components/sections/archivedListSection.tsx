import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import ArchivedListTopNavbar from "@/components/navbar/archivedListTopNavbar";
import ChatListSearchbar from "@/components/searchbar/chatListSearchbar";

const ArchivedListSection = () => {
  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <ArchivedListTopNavbar />
      <ChatListSearchbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default ArchivedListSection;

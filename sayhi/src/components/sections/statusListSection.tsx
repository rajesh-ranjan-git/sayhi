import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import StatusListTopNavbar from "@/components/navbar/statusListTopNavbar";
import ChatListSearchbar from "@/components/searchbar/chatListSearchbar";

const StatusListSection = () => {
  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <StatusListTopNavbar />
      <ChatListSearchbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default StatusListSection;

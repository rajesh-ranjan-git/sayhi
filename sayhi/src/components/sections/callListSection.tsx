import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import CallListTopNavbar from "@/components/navbar/callListTopNavbar";
import CallListSearchbar from "@/components/searchbar/callListSearchbar";

const CallListSection = () => {
  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <CallListTopNavbar />
      <CallListSearchbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default CallListSection;

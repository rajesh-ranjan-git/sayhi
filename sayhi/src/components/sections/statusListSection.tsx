import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import StatusListTopNavbar from "@/components/navbar/statusListTopNavbar";

const StatusListSection = () => {
  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <StatusListTopNavbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default StatusListSection;

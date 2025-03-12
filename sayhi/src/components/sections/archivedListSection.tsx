import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import ArchivedListTopNavbar from "@/components/navbar/archivedListTopNavbar";
import ArchivedListSearchbar from "@/components/searchbar/archivedListSearchbar";

const ArchivedListSection = () => {
  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <ArchivedListTopNavbar />
      <ArchivedListSearchbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default ArchivedListSection;

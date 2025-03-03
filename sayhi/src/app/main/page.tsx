import BottomNavbar from "@/components/navbar/bottomNavbar";
import LeftNavbar from "@/components/navbar/leftNavbar";
import ChatListTopNavbar from "@/components/navbar/chatListTopNavbar";
import EmptyMain from "@/components/empty/emptyMain";
import ChatMainWindow from "@/components/chat/chatMainWindow";

const Main = () => {
  return (
    <main className="flex justify-center items-center bg-slate-900 w-screen h-screen">
      <section className="hidden md:flex justify-center bg-neutral-800 py-2 w-15 h-screen">
        <LeftNavbar />
      </section>
      <section className="bg-neutral-700 border-neutral-800 border-r w-full md:w-96 h-full">
        <ChatListTopNavbar />
        <BottomNavbar />
      </section>
      <section className="hidden md:flex justify-center items-center bg-neutral-700 w-full h-screen">
        {/* <EmptyMain /> */}

        <ChatMainWindow />
      </section>
    </main>
  );
};

export default Main;

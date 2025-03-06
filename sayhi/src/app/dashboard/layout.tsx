import BottomNavbar from "@/components/navbar/bottomNavbar";
import LeftNavbar from "@/components/navbar/leftNavbar";
import ChatListTopNavbar from "@/components/navbar/chatListTopNavbar";
import EmptyMain from "@/components/empty/emptyMain";
import ChatMainWindow from "@/components/chat/chatMainWindow";
import ChatListSearchbar from "@/components/searchbar/chatListSearchbar";
import ChatList from "@/components/chat/chatList";

const DashboardLayout = ({
  children,
  notifications,
  revenue,
  leftNavbar,
  checkAuth,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  leftNavbar: React.ReactNode;
  checkAuth: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-col items-center text-2xl">
        <div className="flex m-4">
          <div className="flex flex-col">{revenue}</div>
          <div className="flex flex-1">{notifications}</div>
        </div>
      </div>
      <main className="flex justify-center items-center bg-slate-800 w-screen h-screen">
        {leftNavbar}
        <section className="bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full md:w-[40vw] h-full">
          <ChatListTopNavbar />
          <ChatListSearchbar />
          <ChatList />
          <BottomNavbar />
        </section>
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;

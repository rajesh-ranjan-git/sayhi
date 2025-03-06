import { Metadata } from "next";
import ChatMainWindow from "@/components/chat/chatMainWindow";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <section className="hidden md:flex justify-center items-center bg-neutral-700 w-full h-screen">
      {/* <EmptyMain /> */}

      <ChatMainWindow />
    </section>
  );
};

export default Dashboard;

"use client";

import ChatList from "@/components/chat/chatList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import ChatListTopNavbar from "@/components/navbar/chatListTopNavbar";
import ChatListSearchbar from "@/components/searchbar/chatListSearchbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ChatListSection = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/main");
  }, []);

  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <ChatListTopNavbar />
      <ChatListSearchbar />
      <ChatList />
      <BottomNavbar />
    </section>
  );
};

export default ChatListSection;

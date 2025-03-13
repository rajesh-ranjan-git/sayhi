"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CallList from "@/components/call/callList";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import CallListTopNavbar from "@/components/navbar/callListTopNavbar";
import CallListSearchbar from "@/components/searchbar/callListSearchbar";
import CallListFavorites from "@/components/call/callListFavorites";

const CallListSection = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/main/callMain");
  }, []);

  return (
    <section className="flex flex-col bg-neutral-700 border-neutral-800 border-r rounded-tl-lg w-full h-screen">
      <CallListTopNavbar />
      <CallListSearchbar />
      <CallListFavorites />
      <CallList />
      <BottomNavbar />
    </section>
  );
};

export default CallListSection;

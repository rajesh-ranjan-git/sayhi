"use client";

import { useRouter } from "next/navigation";
import { MessageSquareText, Phone } from "lucide-react";
import { TbHistoryToggle } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BottomNavbar = () => {
  const router = useRouter();

  return (
    <div className="md:hidden bottom-0 fixed flex justify-between items-center bg-neutral-800 w-full h-16 text-white">
      <div
        className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer"
        onClick={() => router.push("/main/chatSection")}
      >
        <MessageSquareText size={30} />
      </div>
      <div
        className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer"
        onClick={() => router.push("/main/callSection")}
      >
        <Phone size={30} />
      </div>
      <div
        className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer"
        onClick={() => router.push("/main/statusSection")}
      >
        <TbHistoryToggle size={30} />
      </div>
      <div className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default BottomNavbar;

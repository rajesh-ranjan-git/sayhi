import { MessageCircle } from "lucide-react";
import MainChatTopNavbar from "@/components/navbar/mainChatTopNavbar";
import MessageInputBar from "@/components/navbar/messageInputBar";

const ChatMain = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="top-0 left-0 z-0 absolute bg-fixed opacity-5 w-full h-full"
        style={{ backgroundImage: `url(${"/images/chatBg.png"})` }}
      ></div>
      <div className="relative">
        <MainChatTopNavbar />
      </div>
      <div className="z-10 flex flex-col justify-center items-center gap-3 w-full h-[87.6vh]">
        <MessageCircle className="text-green-600" size={60} />
        <h3 className="text-white text-3xl">SayHi</h3>
        <p className="flex justify-center items-center gap-2 text-slate-200 text-sm">
          End-to-end encrypted
        </p>
      </div>
      <div className="relative w-full">
        <MessageInputBar />
      </div>
    </div>
  );
};

export default ChatMain;

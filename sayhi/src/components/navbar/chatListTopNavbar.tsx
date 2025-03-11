import { FaRegEdit } from "react-icons/fa";
import { ListFilter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChatListFilterContext from "@/components/context/chatListFilterContext";

const ChatListTopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 border-b border-b-neutral-800 md:rounded-tl-lg w-full h-16 text-white">
      <div className="flex justify-between items-center p-3 w-full h-16 font-semibold text-lg">
        <p>Chats</p>
      </div>
      <div className="flex justify-center items-center gap-1 p-2 h-16">
        <div className="hover:bg-neutral-600 hover:shadow-md p-3 rounded-md cursor-pointer">
          <FaRegEdit size={20} />
        </div>
        <Popover>
          <PopoverTrigger className="hover:bg-neutral-600 hover:shadow-md p-3 rounded-md cursor-pointer">
            <ListFilter size={20} />
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-800 p-0 border-0 rounded-md w-40">
            <ChatListFilterContext />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ChatListTopNavbar;

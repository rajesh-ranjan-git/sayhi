import { PhoneCall } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChatListFilterContext from "@/components/context/chatListFilterContext";

const CallListTopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 border-b border-b-neutral-800 md:rounded-tl-lg w-full h-16 text-white">
      <div className="flex justify-between items-center p-3 w-full h-16 font-semibold text-lg">
        <p>Calls</p>
      </div>
      <div className="flex justify-center items-center gap-1 p-2 h-16">
        <Popover>
          <PopoverTrigger className="hover:bg-neutral-600 hover:shadow-md p-3 rounded-md cursor-pointer">
            <PhoneCall size={20} />
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-800 p-0 border-0 rounded-md w-40">
            <ChatListFilterContext />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CallListTopNavbar;

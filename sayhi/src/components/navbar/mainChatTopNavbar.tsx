import { Phone, Search, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProfileContext from "@/components/context/profileContext";

const MainChatTopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 border-b border-b-neutral-800 w-full h-16 text-white">
      <div className="flex justify-between items-center p-3 w-full h-16">
        <div className="flex items-center gap-3 min-w-96">
          <Popover>
            <PopoverTrigger className="hover:shadow-md rounded-full hover:scale-105 cursor-pointer">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="flex bg-neutral-700 p-0 border-0 rounded-md w-[35vw] min-h-[50vh]">
              <ProfileContext />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="flex flex-col hover:bg-neutral-600 hover:shadow-md px-2 py-1 pr-10 rounded-md cursor-pointer">
              <span className="font-semibold text-md">Rahee</span>
              <div className="flex items-center gap-1">
                <div className="bg-green-600 rounded-full w-2 h-2"></div>
                <span className="text-muted-foreground text-xs">Online</span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex bg-neutral-700 p-0 border-0 rounded-md w-[35vw] min-h-[50vh]">
              <ProfileContext />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 p-2 h-16">
        <div className="flex bg-neutral-600 rounded-md">
          <div className="hover:shadow-md p-3 cursor-pointer">
            <Video size={20} />
          </div>
          <div className="py-2">
            <Separator orientation="vertical" className="bg-neutral-500" />
          </div>
          <div className="bg-neutral-600 hover:shadow-md p-3 rounded-md cursor-pointer">
            <Phone size={20} />
          </div>
        </div>
        <div className="hover:bg-neutral-600 hover:shadow-md p-3 rounded-md cursor-pointer">
          <Search size={20} />
        </div>
      </div>
    </div>
  );
};

export default MainChatTopNavbar;

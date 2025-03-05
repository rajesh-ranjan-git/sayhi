import {
  AlignJustify,
  Archive,
  MessageCircle,
  MessageSquareText,
  Phone,
  Settings,
  Star,
} from "lucide-react";
import { TbHistoryToggle } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SettingsContext from "@/components/context/settingsContext";

const LeftNavbar = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-2 w-full text-white">
      <div className="w-full">
        <div className="flex justify-center items-center p-2 w-full transition-all ease-in-out cursor-pointer">
          <MessageCircle className="text-green-600" size={20} />
        </div>
        <div className="flex justify-center items-center p-2 border-x-3 border-transparent hover:border-l-green-600 w-full transition-all ease-in-out cursor-pointer">
          <AlignJustify size={20} />
        </div>
        <div className="flex justify-center items-center p-2 border-x-3 border-transparent hover:border-l-green-600 w-full transition-all ease-in-out cursor-pointer">
          <MessageSquareText size={20} />
        </div>
        <div className="flex justify-center items-center p-2 border-x-3 border-transparent hover:border-l-green-600 w-full transition-all ease-in-out cursor-pointer">
          <Phone size={20} />
        </div>
        <div className="flex justify-center items-center p-2 border-x-3 border-transparent hover:border-l-green-600 w-full transition-all ease-in-out cursor-pointer">
          <TbHistoryToggle size={20} />
        </div>
        <div className="p-2">
          <Separator className="bg-neutral-600 w-1/2" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center p-2 border-x-3 border-transparent hover:border-l-green-600 w-full transition-all ease-in-out cursor-pointer">
          <Star size={20} />
        </div>
        <div className="flex justify-center items-center p-2 border-x-3 border-transparent hover:border-l-green-600 w-full transition-all ease-in-out cursor-pointer">
          <Archive size={20} />
        </div>
        <div className="p-2">
          <Separator className="bg-neutral-600" />
        </div>
        <div className="flex justify-center items-center hover:bg-neutral-600 p-2 w-full transition-all ease-in-out cursor-pointer">
          <Popover>
            <PopoverTrigger className="cursor-pointer">
              <Settings size={20} />
            </PopoverTrigger>
            <PopoverContent className="flex bg-neutral-700 p-0 border-0 rounded-md w-[35vw] h-[50vh]">
              <SettingsContext />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex justify-center items-center p-2 w-full transition-all ease-in-out cursor-pointer">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;

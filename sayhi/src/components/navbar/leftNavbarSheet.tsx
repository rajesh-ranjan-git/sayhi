import { AlignJustify, MessageCircle, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  leftNavbarBottomMenuItems,
  leftNavbarTopMenuItems,
} from "@/config/config";
import SettingsContext from "@/components/context/settingsContext";

const LeftNavbarSheet = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-2 w-full h-full text-white">
      <div className="p-1 w-full">
        <div className="flex justify-start items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <MessageCircle className="text-green-600" size={20} />
          <span>SayHi</span>
        </div>
        <div className="hover:bg-neutral-600 rounded-md w-full">
          <div className="flex items-center gap-2 py-2 w-full active:scale-x-50 transition-all ease-in-out cursor-pointer">
            <div className="bg-transparent rounded-full w-[2px] h-3"></div>
            <AlignJustify size={20} />
            <span>Menu</span>
          </div>
        </div>

        {leftNavbarTopMenuItems && leftNavbarTopMenuItems.length > 0
          ? leftNavbarTopMenuItems.map((item) => (
              <div
                className="hover:bg-neutral-600 rounded-md w-full"
                key={item.id}
              >
                <div className="flex items-center gap-2 py-2 w-full transition-all ease-in-out cursor-pointer">
                  <div className="flex items-center bg-green-600 rounded-full w-[2px] h-3"></div>
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </div>
            ))
          : null}

        <div className="p-2">
          <Separator className="bg-neutral-600 w-1/2" />
        </div>
      </div>
      <div className="w-full">
        <div className="p-1 w-full">
          {leftNavbarBottomMenuItems && leftNavbarBottomMenuItems.length > 0
            ? leftNavbarBottomMenuItems.map((item) => (
                <div
                  className="hover:bg-neutral-600 rounded-md w-full"
                  key={item.id}
                >
                  <div className="flex items-center gap-2 py-2 w-full transition-all ease-in-out cursor-pointer">
                    <div className="flex items-center bg-green-600 rounded-full w-[2px] h-3"></div>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </div>
              ))
            : null}

          <div className="p-2">
            <Separator className="bg-neutral-600 w-1/2" />
          </div>
          <Popover>
            <PopoverTrigger className="w-full cursor-pointer">
              <div className="flex justify-start items-center hover:bg-neutral-600 rounded-md w-full">
                <div className="flex items-center gap-2 py-2 w-full transition-all ease-in-out cursor-pointer">
                  <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
                  <Settings size={20} />
                  <span>Settings</span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex bg-neutral-700 p-0 border-0 rounded-md sm:w-[35vw] min-h-[50vh] max-h-[70vh]">
              <SettingsContext />
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center p-2 w-full transition-all ease-in-out cursor-pointer">
            <Popover>
              <PopoverTrigger className="cursor-pointer">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>RR</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="flex bg-neutral-700 p-0 border-0 rounded-md sm:w-[35vw] min-h-[50vh] max-h-[70vh]">
                <SettingsContext />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbarSheet;

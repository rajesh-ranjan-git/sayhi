"use client";

import { useRouter } from "next/navigation";
import { AlignJustify, MessageCircle, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  leftNavbarBottomMenuItems,
  leftNavbarTopMenuItems,
} from "@/config/config";
import SettingsContext from "@/components/context/settingsContext";
import LeftNavbarSheet from "@/components/navbar/leftNavbarSheet";

const LeftNavbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between items-center gap-2 w-full h-full text-white">
      <div className="p-1 w-full">
        <div
          className="flex justify-center items-center py-2 w-full transition-all ease-in-out cursor-pointer"
          onClick={() => router.push("/main")}
        >
          <MessageCircle className="text-green-600" size={20} />
        </div>
        <div className="hover:bg-neutral-600 rounded-md w-full">
          <Sheet>
            <SheetTrigger>
              <div className="flex items-center gap-2 py-2 w-full active:scale-x-50 transition-all ease-in-out cursor-pointer">
                <div className="bg-transparent rounded-full w-[2px] h-3"></div>
                <AlignJustify size={20} />
              </div>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-neutral-800 border-0 rounded-r-md w-32"
            >
              <SheetHeader className="hidden"></SheetHeader>
              <SheetTitle className="hidden"></SheetTitle>
              <SheetDescription className="hidden"></SheetDescription>
              <LeftNavbarSheet />
            </SheetContent>
          </Sheet>
        </div>

        {leftNavbarTopMenuItems && leftNavbarTopMenuItems.length > 0
          ? leftNavbarTopMenuItems.map((item) => (
              <div
                className="hover:bg-neutral-600 rounded-md w-full"
                key={item.id}
              >
                <div className="flex items-center gap-2 py-2 w-full transition-all ease-in-out cursor-pointer">
                  <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
                  {item.icon}
                </div>
              </div>
            ))
          : null}

        <div className="p-2">
          <Separator className="bg-neutral-600 w-1/2" />
        </div>
      </div>
      <div>
        <div className="p-1 w-full">
          {leftNavbarBottomMenuItems && leftNavbarBottomMenuItems.length > 0
            ? leftNavbarBottomMenuItems.map((item) => (
                <div
                  className="hover:bg-neutral-600 rounded-md w-full"
                  key={item.id}
                >
                  <div className="flex items-center gap-2 py-2 w-full transition-all ease-in-out cursor-pointer">
                    <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
                    {item.icon}
                  </div>
                </div>
              ))
            : null}

          <div className="p-2">
            <Separator className="bg-neutral-600 w-1/2" />
          </div>
          <Popover>
            <PopoverTrigger className="w-full cursor-pointer">
              <div className="hover:bg-neutral-600 rounded-md w-full">
                <div className="flex items-center gap-2 py-2 w-full transition-all ease-in-out cursor-pointer">
                  <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
                  <Settings size={20} />
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

export default LeftNavbar;

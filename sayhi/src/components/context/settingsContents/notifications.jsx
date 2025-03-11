import { MessageCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomToggle from "@/components/ui/customToggle";
import { Separator } from "@/components/ui/separator";

const Notifications = () => {
  return (
    <div className="flex flex-col gap-1 bg-neutral-600 p-3 rounded-r-md w-[60%] h-full text-white">
      <h2 className="font-semibold">Notifications</h2>
      <div className="flex gap-2 py-2">
        <div className="border-2 border-green-400 rounded-md w-full h-28">
          <div className="flex justify-end items-end p-1 w-full h-[70%]">
            <div className="flex justify-center items-center gap-1 bg-green-400 p-1 rounded-sm w-[50%] h-7">
              <div className="bg-neutral-600 rounded-sm w-5 h-5"></div>
              <div className="flex flex-col gap-1 w-[80%] h-5">
                <div className="bg-neutral-600 rounded-md w-[50%] h-1"></div>
                <div className="bg-neutral-600 rounded-md w-full h-1"></div>
                <div className="bg-neutral-600 rounded-md w-[70%] h-1"></div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-500 rounded-b-md w-full h-[30%]"></div>
        </div>
        <div className="border-2 border-green-400 rounded-md w-full h-28">
          <div className="w-full h-[60%]"></div>
          <div className="flex justify-center items-center bg-neutral-500 rounded-b-md w-full h-[40%]">
            <div className="relative">
              <div className="top-[-5] right-[-5] absolute flex justify-center items-center bg-green-400 rounded-full w-3 h-3 text-[0.7rem] text-neutral-600">
                2
              </div>
              <MessageCircle
                className="bg-neutral-600 rounded-sm text-green-600"
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p className="text-xs">Show banner notifications</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-52 data-[placeholder]:text-neutral-200">
            <SelectValue
              placeholder="Show banner notifications"
              className="text-white"
            />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectItem
                value="systemDefault"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>Always</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p className="text-xs">Show taskbar notification badge</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-64 data-[placeholder]:text-neutral-200">
            <SelectValue
              placeholder="Show taskbar notification badge"
              className="text-white"
            />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectItem
                value="systemDefault"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>Always</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Separator className="bg-neutral-500" />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex justify-between items-center text-xs">
          <span>Messages</span>
          <CustomToggle label="Off" />
        </div>
        <div className="flex justify-between items-center text-xs">
          <span>Calls</span>
          <CustomToggle label="Off" />
        </div>
        <div className="flex justify-between items-center text-xs">
          <span>
            Reactions
            <br />
            Show notifications for reactions to messages you send
          </span>
          <CustomToggle label="Off" />
        </div>
        <div className="flex justify-between items-center text-xs">
          <span>
            Status reactions
            <br />
            Show notifications when you get likes
          </span>
          <CustomToggle label="Off" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;

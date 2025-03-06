import {
  Bell,
  CircleHelp,
  Keyboard,
  KeyRound,
  MessageCircleMore,
  Monitor,
  Pencil,
  Server,
  UserRound,
  Video,
} from "lucide-react";
import SettingsContextRightContent from "@/components/context/settingsContextRightContent";

const SettingsContext = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-between bg-neutral-700 p-1 rounded-l-md w-[40%] h-full text-white text-sm">
        <div className="w-full">
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <Monitor size={15} />
              <span>General</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <KeyRound size={15} />
              <span>Account</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <MessageCircleMore size={15} />
              <span>Chats</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <Video size={15} />
              <span>Video & voice</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <Bell size={15} />
              <span>Notifications</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <Pencil size={15} />
              <span>Personalization</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <Server size={15} />
              <span>Storage</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <Keyboard size={15} />
              <span>Shortcut</span>
            </div>
          </div>
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <CircleHelp size={15} />
              <span>Help</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <UserRound size={15} />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
      <SettingsContextRightContent />
    </div>
  );
};

export default SettingsContext;

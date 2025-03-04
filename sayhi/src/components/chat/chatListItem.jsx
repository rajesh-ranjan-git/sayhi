import { BsPinAngleFill } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatListItem = () => {
  return (
    <div className="flex items-center gap-3 hover:bg-neutral-600 p-2 py-2 rounded-md w-full transition-all ease-in-out cursor-pointer">
      <div className="cursor-pointer">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <span className="font-semibold">Rajesh Ranjan</span>
          <span>3-4-2025</span>
        </div>
        <div className="flex justify-between items-center w-full text-sm">
          <span>Chat message overview</span>
          <span>
            <BsPinAngleFill size={15} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;

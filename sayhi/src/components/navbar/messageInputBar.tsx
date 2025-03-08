import { Mic, Paperclip, SendHorizontal, Smile } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AttachmentContext from "@/components/context/attachmentContext";

const MessageInputBar = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 w-full h-12 text-white">
      <div className="flex justify-between items-center p-3 w-full h-12">
        <div className="flex items-center gap-5 w-full">
          <div className="hover:shadow-md rounded-full hover:scale-105 cursor-pointer">
            <Smile size={20} />
          </div>
          <Popover>
            <PopoverTrigger className="hover:shadow-md rounded-full hover:scale-105 cursor-pointer">
              <Paperclip size={20} />
            </PopoverTrigger>
            <PopoverContent className="bg-neutral-800 p-0 border-0 rounded-md w-40">
              <AttachmentContext />
            </PopoverContent>
          </Popover>
          {/* <div className="hover:shadow-md rounded-full hover:scale-105 cursor-pointer">
            <Paperclip size={20} />
          </div> */}
          <div className="flex flex-col hover:bg-neutral-600 hover:shadow-md px-2 py-1 pr-10 rounded-md w-full cursor-pointer">
            <input
              placeholder="Type a message"
              className="px-2 rounded-sm outline-none w-full"
            />
          </div>
          <div className="hover:shadow-md rounded-full hover:scale-105 cursor-pointer">
            <Mic size={20} />
          </div>
          <div className="hover:shadow-md rounded-full hover:scale-105 cursor-pointer">
            <SendHorizontal size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInputBar;

import { Button } from "@/components/ui/button";
import { TabletSmartphone } from "lucide-react";

const Chats = () => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-r-md w-full h-full text-white">
      <h2 className="font-semibold">Chats</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>Chat History</p>
        <div className="flex items-center gap-2 text-xs">
          <TabletSmartphone size={15} />
          <span>Synced with your phone</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div>
          <Button className="bg-neutral-500 hover:bg-neutral-700 font-normal cursor-pointer">
            Archive all chats
          </Button>
        </div>
        <p className="text-xs">
          You will still receive new messages from archived chats
        </p>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div>
          <Button className="bg-neutral-500 hover:bg-neutral-700 font-normal text-red-300 hover:text-red-400 cursor-pointer">
            Clear all messages
          </Button>
        </div>
        <p className="text-xs">Delete all messages from chats and groups</p>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div>
          <Button className="bg-neutral-500 hover:bg-neutral-700 font-normal text-red-300 hover:text-red-400 cursor-pointer">
            Delete all chats
          </Button>
        </div>
        <p className="text-xs">
          Delete all messages and clear the chats from history
        </p>
      </div>
    </div>
  );
};

export default Chats;

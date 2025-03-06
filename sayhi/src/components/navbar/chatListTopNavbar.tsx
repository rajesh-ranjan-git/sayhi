import { ListFilter } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";

const ChatListTopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 border-b border-b-neutral-800 md:rounded-tl-lg w-full h-16 text-white">
      <div className="flex justify-between items-center p-3 w-full h-16 font-semibold text-lg">
        <p>Chats</p>
      </div>
      <div className="flex justify-center items-center gap-1 p-2 h-16">
        <div className="hover:bg-neutral-600 hover:shadow-md p-3 rounded-md cursor-pointer">
          <FaRegEdit size={20} />
        </div>
        <div className="hover:bg-neutral-600 hover:shadow-md p-3 rounded-md cursor-pointer">
          <ListFilter size={20} />
        </div>
      </div>
    </div>
  );
};

export default ChatListTopNavbar;

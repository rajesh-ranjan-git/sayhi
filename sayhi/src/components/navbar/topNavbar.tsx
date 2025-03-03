import { ListFilter, MessageSquareText, Phone } from "lucide-react";
import { TbHistoryToggle } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegEdit } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 border-b border-b-neutral-800 w-full h-16 text-white">
      <div className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer">
        <MessageSquareText size={30} />
      </div>
      <div className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer">
        <FaRegEdit size={20} />
      </div>
      <div className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer">
        <ListFilter size={20} />
      </div>
      <div className="flex justify-center items-center p-3 hover:border-green-600 border-t-3 border-transparent w-full h-16 transition-all ease-in-out cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TopNavbar;

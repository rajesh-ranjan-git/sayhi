import {
  Heart,
  MessageSquareDot,
  Pencil,
  UserRound,
  UserRoundX,
  UsersRound,
} from "lucide-react";

const ChatListFilterContext = () => {
  return (
    <div className="flex flex-col justify-between p-1 rounded-md h-full text-white text-sm">
      <div className="rounded-md w-full text-neutral-600 text-xs">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out">
          <span>Filter chats by</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <MessageSquareDot size={15} />
          <span>Unread</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <Heart size={15} />
          <span>Favorites</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <UserRound size={15} />
          <span>Contacts</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <UserRoundX size={15} />
          <span>Non-contacts</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <UsersRound size={15} />
          <span>Groups</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <Pencil size={15} />
          <span>Drafts</span>
        </div>
      </div>
    </div>
  );
};

export default ChatListFilterContext;

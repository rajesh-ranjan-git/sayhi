import { chatListFilterOptions } from "@/config/config";

const ChatListFilterContext = () => {
  return (
    <div className="flex flex-col justify-between p-1 rounded-md h-full text-white text-sm">
      <div className="rounded-md w-full text-neutral-600 text-xs">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out">
          <span>Filter chats by</span>
        </div>
      </div>

      {chatListFilterOptions && chatListFilterOptions.length > 0
        ? chatListFilterOptions.map((item) => (
            <div
              className="hover:bg-neutral-600 rounded-md w-full"
              key={item.id}
            >
              <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ChatListFilterContext;

import React from "react";
import Avatar from "../common/avatar";
import { useStateProvider } from "@/context/stateContext";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";

const ChatListHeader = () => {
  const [{ userInfo }, dispatch] = useStateProvider();

  return (
    <div className="flex justify-between items-center px-4 py-3 h-16">
      <div className="cursor-pointer">
        <Avatar type="sm" image={userInfo?.profileImage} />
        {/* <Avatar type="sm" image="/defaultAvatar.png" /> */}
      </div>
      <div className="flex gap-6">
        <BsFillChatLeftTextFill
          className="text-panel-header-icon text-xl cursor-pointer"
          title="New Chat"
        />
        <>
          <BsThreeDotsVertical
            className="text-panel-header-icon text-xl cursor-pointer"
            title="Menu"
          />
        </>
      </div>
    </div>
  );
};

export default ChatListHeader;

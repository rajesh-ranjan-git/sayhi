import React from "react";
import Avatar from "../common/avatar";
import { useStateProvider } from "@/context/stateContext";

const ChatListHeader = () => {
  // const [{ userInfo }, dispatch] = useStateProvider();

  return (
    <div className="flex justify-between items-center px-4 py-3 h-16">
      <div className="cursor-pointer">
        {/* <Avatar type="sm" image={userInfo?.profileImage} /> */}
        <Avatar type="sm" image="/defaultAvatar.png" />
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default ChatListHeader;

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Archive,
  MessageSquareText,
  Phone,
  Star,
  Heart,
  MessageSquareDot,
  Pencil,
  UserRound,
  UserRoundX,
  UsersRound,
  Brush,
  Camera,
  File,
  ImageIcon,
  Vote,
  Bell,
  CircleHelp,
  Keyboard,
  KeyRound,
  MessageCircleMore,
  Monitor,
  Server,
  Video,
  ArrowUp,
} from "lucide-react";
import { TbHistoryToggle } from "react-icons/tb";

export const leftNavbarTopMenuItems = [
  {
    id: "chat",
    label: "chat",
    name: "Chat",
    icon: <MessageSquareText size={20} />,
  },
  {
    id: "phone",
    label: "phone",
    name: "Phone",
    icon: <Phone size={20} />,
  },
  {
    id: "status",
    label: "status",
    name: "Status",
    icon: <TbHistoryToggle size={20} />,
  },
];

export const leftNavbarBottomMenuItems = [
  {
    id: "starred",
    label: "starred",
    name: "Starred",
    icon: <Star size={20} />,
  },
  {
    id: "archived",
    label: "archived",
    name: "Archived",
    icon: <Archive size={20} />,
  },
];

export const chatListFilterOptions = [
  {
    id: "unread",
    label: "unread",
    name: "Unread",
    icon: <MessageSquareDot size={15} />,
  },
  {
    id: "favorites",
    label: "favorites",
    name: "Favorites",
    icon: <Heart size={15} />,
  },
  {
    id: "contacts",
    label: "contacts",
    name: "Contacts",
    icon: <UserRound size={15} />,
  },
  {
    id: "nonContacts",
    label: "nonContacts",
    name: "Non-Contacts",
    icon: <UserRoundX size={15} />,
  },
  {
    id: "groups",
    label: "groups",
    name: "Groups",
    icon: <UsersRound size={15} />,
  },
  {
    id: "drafts",
    label: "drafts",
    name: "Drafts",
    icon: <Pencil size={15} />,
  },
];

export const attachmentOptions = [
  {
    id: "photosAndVideos",
    label: "photosAndVideos",
    name: "Photos & Videos",
    icon: <ImageIcon size={15} />,
  },
  {
    id: "camera",
    label: "camera",
    name: "Camera",
    icon: <Camera size={15} />,
  },
  {
    id: "document",
    label: "document",
    name: "Document",
    icon: <File size={15} />,
  },
  {
    id: "contact",
    label: "contact",
    name: "Contact",
    icon: <UserRound size={15} />,
  },
  {
    id: "poll",
    label: "poll",
    name: "Poll",
    icon: <Vote size={15} />,
  },
  {
    id: "drawing",
    label: "drawing",
    name: "Drawing",
    icon: <Brush size={15} />,
  },
];

export const settingsContextOptions = [
  {
    id: "general",
    label: "general",
    name: "General",
    icon: <Monitor size={15} />,
  },
  {
    id: "account",
    label: "account",
    name: "Account",
    icon: <KeyRound size={15} />,
  },
  {
    id: "chats",
    label: "chats",
    name: "Chats",
    icon: <MessageCircleMore size={15} />,
  },
  {
    id: "videoAndVoice",
    label: "videoAndVoice",
    name: "Video & voice",
    icon: <Video size={15} />,
  },
  {
    id: "notifications",
    label: "notifications",
    name: "Notifications",
    icon: <Bell size={15} />,
  },
  {
    id: "personalization",
    label: "personalization",
    name: "Personalization",
    icon: <Pencil size={15} />,
  },
  {
    id: "storage",
    label: "storage",
    name: "Storage",
    icon: <Server size={15} />,
  },
  {
    id: "shortcut",
    label: "shortcut",
    name: "Shortcut",
    icon: <Keyboard size={15} />,
  },
  {
    id: "help",
    label: "help",
    name: "Help",
    icon: <CircleHelp size={15} />,
  },
];

export const profileContextOptions = [
  {
    id: "general",
    label: "general",
    name: "General",
    icon: <Monitor size={15} />,
  },
  {
    id: "account",
    label: "account",
    name: "Account",
    icon: <KeyRound size={15} />,
  },
  {
    id: "chats",
    label: "chats",
    name: "Chats",
    icon: <MessageCircleMore size={15} />,
  },
  {
    id: "videoAndVoice",
    label: "videoAndVoice",
    name: "Video & voice",
    icon: <Video size={15} />,
  },
  {
    id: "notifications",
    label: "notifications",
    name: "Notifications",
    icon: <Bell size={15} />,
  },
  {
    id: "personalization",
    label: "personalization",
    name: "Personalization",
    icon: <Pencil size={15} />,
  },
  {
    id: "storage",
    label: "storage",
    name: "Storage",
    icon: <Server size={15} />,
  },
  {
    id: "shortcut",
    label: "shortcut",
    name: "Shortcut",
    icon: <Keyboard size={15} />,
  },
  {
    id: "help",
    label: "help",
    name: "Help",
    icon: <CircleHelp size={15} />,
  },
];

export const keyboardShortcutOptions = [
  {
    id: "newChat",
    label: "newChat",
    name: "New chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          N
        </Badge>
      </span>
    ),
  },
  {
    id: "closeChat",
    label: "closeChat",
    name: "Close chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          W
        </Badge>
      </span>
    ),
  },
  {
    id: "closeChat2",
    label: "closeChat",
    name: "Close chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          F4
        </Badge>
      </span>
    ),
  },
  {
    id: "closeApplication",
    label: "closeApplication",
    name: "Close application",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Alt
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          F4
        </Badge>
      </span>
    ),
  },
  {
    id: "newGroup",
    label: "newGroup",
    name: "New group",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          N
        </Badge>
      </span>
    ),
  },
  {
    id: "search",
    label: "search",
    name: "Search",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          F
        </Badge>
      </span>
    ),
  },
  {
    id: "searchInChat",
    label: "searchInChat",
    name: "Search in chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          F
        </Badge>
      </span>
    ),
  },
  {
    id: "profile",
    label: "profile",
    name: "Profile",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          P
        </Badge>
      </span>
    ),
  },
  {
    id: "muteChat",
    label: "muteChat",
    name: "Mute chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          M
        </Badge>
      </span>
    ),
  },
  {
    id: "toggleRead",
    label: "toggleRead",
    name: "Toggle read",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          U
        </Badge>
      </span>
    ),
  },
  {
    id: "emojiPanel",
    label: "emojiPanel",
    name: "Emoji panel",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          E
        </Badge>
      </span>
    ),
  },
  {
    id: "gifPanel",
    label: "gifPanel",
    name: "Gif panel",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          G
        </Badge>
      </span>
    ),
  },
  {
    id: "stickerPanel",
    label: "stickerPanel",
    name: "Sticker panel",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          S
        </Badge>
      </span>
    ),
  },
  {
    id: "previousChat",
    label: "previousChat",
    name: "Previous chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          {"["}
        </Badge>
      </span>
    ),
  },
  {
    id: "nextChat",
    label: "nextChat",
    name: "Next chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          {"]"}
        </Badge>
      </span>
    ),
  },
  {
    id: "previousChat2",
    label: "previousChat",
    name: "Previous chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          Shift
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          Tab
        </Badge>
      </span>
    ),
  },
  {
    id: "nextChat2",
    label: "nextChat",
    name: "Next chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          Tab
        </Badge>
      </span>
    ),
  },
  {
    id: "openChat",
    label: "openChat",
    name: "Open chat",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="w-6 text-neutral-300">
          1..9
        </Badge>
      </span>
    ),
  },
  {
    id: "editLastMessage",
    label: "editLastMessage",
    name: "Edit last message",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          <ArrowUp size={16} />
        </Badge>
      </span>
    ),
  },
  {
    id: "decreaseTextSize",
    label: "decreaseTextSize",
    name: "Decrease text size",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          -
        </Badge>
      </span>
    ),
  },
  {
    id: "increaseTextSize",
    label: "increaseTextSize",
    name: "Increase text size",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          +
        </Badge>
      </span>
    ),
  },
  {
    id: "resetTextSize",
    label: "resetTextSize",
    name: "Reset text size",
    key: (
      <span className="flex gap-2">
        <Badge variant="outline" className="text-neutral-300">
          Ctrl
        </Badge>
        <Badge variant="outline" className="text-neutral-300">
          0
        </Badge>
      </span>
    ),
  },
];

export const storageOptions = [
  {
    id: "photos",
    label: "photos",
    name: "Photos",
  },
  {
    id: "audio",
    label: "audio",
    name: "Audio",
  },
  {
    id: "videos",
    label: "videos",
    name: "Videos",
  },
  {
    id: "documents",
    label: "documents",
    name: "Documents",
  },
];

export const chatWallpaperOptions = [
  {
    id: "grey",
    color: "bg-neutral-700",
  },
  {
    id: "#a7afeb",
    color: "bg-[#a7afeb]",
  },
  {
    id: "#d405da",
    color: "bg-[#d405da]",
  },
  {
    id: "#e0cbe3",
    color: "bg-[#e0cbe3]",
  },
  {
    id: "#6a8aa1",
    color: "bg-[#6a8aa1]",
  },
  {
    id: "#768a03",
    color: "bg-[#768a03]",
  },
  {
    id: "#dede6a",
    color: "bg-[#dede6a]",
  },
  {
    id: "#11ee7a",
    color: "bg-[#11ee7a]",
  },
  {
    id: "#ad3b93",
    color: "bg-[#ad3b93]",
  },
  {
    id: "#cd76cf",
    color: "bg-[#cd76cf]",
  },
  {
    id: "#a0130d",
    color: "bg-[#a0130d]",
  },
  {
    id: "#014c64",
    color: "bg-[#014c64]",
  },
  {
    id: "#da440c",
    color: "bg-[#da440c]",
  },
  {
    id: "#2c288a",
    color: "bg-[#2c288a]",
  },
  {
    id: "#a0aae1",
    color: "bg-[#a0aae1]",
  },
  {
    id: "#f904d7",
    color: "bg-[#f904d7]",
  },
];

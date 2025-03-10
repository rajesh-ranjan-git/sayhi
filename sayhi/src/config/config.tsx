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

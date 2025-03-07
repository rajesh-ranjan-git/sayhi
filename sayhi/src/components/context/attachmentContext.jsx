import Image from "next/image";
import {
  Brush,
  Camera,
  File,
  Heart,
  ImageIcon,
  MessageSquareDot,
  Pencil,
  UserRound,
  UserRoundX,
  UsersRound,
  Vote,
} from "lucide-react";

const AttachmentContext = () => {
  return (
    <div className="flex flex-col justify-between p-1 rounded-md h-full text-white text-sm">
      <div className="rounded-md w-full text-neutral-600 text-xs">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out">
          <Image
            src="/images/chatBg.png"
            width={300}
            height={300}
            alt="clipboardImage"
          />
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <ImageIcon size={15} />
          <span>Photos & Videos</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <Camera size={15} />
          <span>Camera</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <File size={15} />
          <span>Document</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <UserRound size={15} />
          <span>Contact</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <Vote size={15} />
          <span>Poll</span>
        </div>
      </div>
      <div className="hover:bg-neutral-600 rounded-md w-full">
        <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out cursor-pointer">
          <Brush size={15} />
          <span>Drawing</span>
        </div>
      </div>
    </div>
  );
};

export default AttachmentContext;

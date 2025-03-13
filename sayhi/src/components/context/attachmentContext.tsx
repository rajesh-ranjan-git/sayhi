import Image from "next/image";
import { attachmentOptions } from "@/config/config";

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

      {attachmentOptions && attachmentOptions.length > 0
        ? attachmentOptions.map((item) => (
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

export default AttachmentContext;

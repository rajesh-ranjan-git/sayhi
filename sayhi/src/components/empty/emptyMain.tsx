import { MessageCircle } from "lucide-react";

const EmptyMain = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="top-0 left-0 z-0 absolute bg-fixed opacity-5 w-full h-full"
        style={{ backgroundImage: `url(${"/images/chatBg.png"})` }}
      ></div>
      <div className="flex flex-col justify-center items-center gap-3 bg-transparent w-full h-full">
        <MessageCircle className="text-green-600" size={60} />
        <h3 className="text-white text-3xl">SayHi</h3>
        <p className="flex justify-center items-center gap-2 text-slate-200 text-sm">
          End-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default EmptyMain;

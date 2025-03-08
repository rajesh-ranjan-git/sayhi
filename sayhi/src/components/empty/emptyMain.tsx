import { MessageCircle } from "lucide-react";

const EmptyMain = () => {
  return (
    <section className="hidden sm:flex flex-col bg-neutral-700 w-full h-screen">
      <div className="flex-1 border-neutral-800 border-b w-full h-full g-neutral-500">
        <div className="relative flex flex-col justify-center items-center gap-2 w-full h-full">
          <div
            className="top-0 left-0 z-0 absolute bg-fixed opacity-5 w-full h-full"
            style={{ backgroundImage: `url(${"/images/chatBg.png"})` }}
          ></div>
          <MessageCircle className="text-green-600" size={60} />
          <h3 className="text-white text-3xl">SayHi</h3>
          <p className="flex justify-center items-center gap-2 text-slate-200 text-sm">
            End-to-end encrypted
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmptyMain;

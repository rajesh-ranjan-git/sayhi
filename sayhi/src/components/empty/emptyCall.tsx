import { Video } from "lucide-react";
import { IoMdKeypad } from "react-icons/io";

const EmptyCall = () => {
  return (
    <section className="hidden sm:flex flex-col bg-neutral-700 w-full h-screen">
      <div className="flex-1 border-neutral-800 border-b w-full h-full g-neutral-500">
        <div className="relative flex flex-col justify-center items-center gap-2 w-full h-full">
          <div className="place-items-center gap-4 grid grid-cols-3 font-semibold text-white text-xs">
            <div className="flex justify-center items-center bg-neutral-600 hover:shadow-md rounded-md w-14 h-14 cursor-pointer">
              <Video size={30} className="fill-green-400 text-green-400" />
            </div>
            <div className="flex justify-center items-center bg-neutral-600 hover:shadow-md rounded-md w-14 h-14 cursor-pointer">
              <Video size={30} className="text-neutral-200" />
            </div>
            <div className="flex justify-center items-center bg-neutral-600 hover:shadow-md rounded-md w-14 h-14 cursor-pointer">
              <IoMdKeypad size={30} className="text-neutral-200" />
            </div>
            <span>Start call</span>
            <span>New call link</span>
            <span>Call a number</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCall;

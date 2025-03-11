import Image from "next/image";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  return (
    <div className="flex flex-col gap-1 bg-neutral-600 p-3 rounded-r-md w-[60%] h-full text-white">
      <div className="rounded-full w-20 h-20 overflow-hidden">
        <Image
          src="/images/latest_pic.png"
          alt="profilePic"
          width={100}
          height={100}
          className="rounded-full w-20 h-20 object-cover"
        />
      </div>
      <div className="flex justify-between items-center gap-2 py-2">
        <p className="font-bold">Rajesh</p>
        <span className="text-xs">
          <Pencil size={15} />
        </span>
      </div>
      <div className="flex justify-between items-center gap-2 py-2">
        <div>
          <p className="text-neutral-300 text-xs">About</p>
          <span className="text-xs">This is your about message.</span>
        </div>
        <Pencil size={15} />
      </div>
      <div className="flex justify-between items-center gap-2 py-2">
        <div>
          <p className="text-neutral-300 text-xs">Phone number</p>
          <span className="text-xs">+91 99993 40771</span>
        </div>
        <Pencil size={15} />
      </div>
      <div className="flex flex-col gap-2">
        <Separator className="bg-neutral-500" />
      </div>
      <div className="pt-4">
        <Button className="bg-neutral-500 hover:bg-neutral-700 font-normal text-red-400 cursor-pointer">
          Log out
        </Button>
      </div>
      <div>
        <span className="text-xs">
          Chat history on this computer will be cleared when you log out.
        </span>
      </div>
    </div>
  );
};

export default Profile;

import { Smartphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Account = () => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-r-md w-full h-full text-white">
      <h2 className="font-semibold">Account</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>Privacy</p>
        <p className="text-xs italic">Managed on your phone</p>
      </div>
      <div className="flex flex-col gap-2 py-2 text-xs">
        <p className="text-neutral-400">Last seen and online</p>
        <p>My contacts, Everyone</p>
      </div>
      <div className="flex flex-col gap-2 py-2 text-xs">
        <p className="text-neutral-400">Profile photo</p>
        <p>My contacts</p>
      </div>
      <div className="flex flex-col gap-2 py-2 text-xs">
        <p className="text-neutral-400">About</p>
        <p>My contacts</p>
      </div>
      <div className="flex flex-col gap-2 py-2 text-xs">
        <p className="text-neutral-400">Add to groups</p>
        <p>My contacts</p>
      </div>
      <div className="flex flex-col gap-2 py-2 text-xs">
        <p className="text-neutral-400">Read receipts</p>
        <p>On</p>
        <p className="text-neutral-400">
          Read receipts are always sent for group chats
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Separator className="bg-neutral-500" />
      </div>

      <div className="flex flex-col gap-2 py-2">
        <p>Blocked Contacts</p>
        <p className="text-xs italic">Managed on your phone</p>
        <p className="flex gap-2 text-xs">
          <span>
            <Smartphone size={15} />
          </span>
          81 contacts blocked
        </p>
      </div>
    </div>
  );
};

export default Account;

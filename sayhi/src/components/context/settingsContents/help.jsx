import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Help = () => {
  return (
    <div className="flex flex-col gap-1 bg-neutral-600 p-3 rounded-r-md w-[60%] h-full text-white">
      <h2 className="font-semibold">Help</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>SayHi for Windows</p>
        <span className="text-xs">Version 1.0</span>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p>Contact Us</p>
        <span className="text-xs">
          We'd like to know your thoughts about this app.
        </span>
        <Link href={"/main"} className="text-green-600 text-xs hover:underline">
          Contact Us
        </Link>
        <Link href={"/main"} className="text-green-600 text-xs hover:underline">
          Rate the app
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Separator className="bg-neutral-500" />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <Link href={"/main"} className="text-green-600 text-xs hover:underline">
          Help center
        </Link>
        <Link href={"/main"} className="text-green-600 text-xs hover:underline">
          Licenses
        </Link>
        <Link href={"/main"} className="text-green-600 text-xs hover:underline">
          Terms and Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Separator className="bg-neutral-500" />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <span className="text-xs">2025 &copy; SayHi Inc.</span>
      </div>
    </div>
  );
};

export default Help;

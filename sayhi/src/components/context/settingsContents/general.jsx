import Link from "next/link";
import { RiEnglishInput } from "react-icons/ri";
import { Globe, IndianRupee, Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomToggle from "@/components/ui/customToggle";
import { Separator } from "@/components/ui/separator";

const General = () => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-r-md w-full h-full text-white">
      <h2 className="font-semibold">General</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>Login</p>
        <div className="flex justify-between items-center text-xs">
          <span>Start SayHi at login</span>
          <CustomToggle label="Off" />
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p>Language</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-48 data-[placeholder]:text-neutral-200">
            <SelectValue placeholder="Choose Language" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectLabel className="flex items-center gap-2">
                <Languages className="text-white" size={16} />
                <span>Choose Language</span>
              </SelectLabel>
              <SelectItem
                value="systemDefault"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <Globe className="text-white" />
                <span>System Default</span>
              </SelectItem>
              <SelectItem
                value="hindi"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <IndianRupee className="text-white" />
                <span>Hindi</span>
              </SelectItem>
              <SelectItem
                value="english"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <RiEnglishInput className="text-white" />
                <span>English</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p>Typing</p>
        <div className="flex justify-between items-center text-xs">
          <span>
            Change typing settings for autocorrect and misspelled highlight from{" "}
            <Link href="#" className="text-green-600 underline">
              Windows Settings
            </Link>
            .
          </span>
        </div>
        <p className="text-sm">Replace text with emoji</p>
        <div className="flex justify-between items-center text-xs">
          <span>
            Emoji will replace specific text as you type.
            <br />
            <Link href="#" className="text-green-600 underline">
              See list of text
            </Link>
            .
          </span>
          <CustomToggle label="😁" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Separator className="bg-neutral-500" />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p className="text-xs">
          To logout of SayHi on this computer go to your{" "}
          <Link href="#" className="text-green-600 underline">
            Profile
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default General;

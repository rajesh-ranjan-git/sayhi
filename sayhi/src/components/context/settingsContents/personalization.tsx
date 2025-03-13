import { ALargeSmall, Palette } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { chatWallpaperOptions } from "@/config/config";

const Personalization = () => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-r-md w-full h-full text-white">
      <h2 className="font-semibold">Personalization</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>Theme</p>
        <p className="text-xs">App color theme</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-44 data-[placeholder]:text-neutral-200">
            <Palette className="text-white" size={16} />
            <SelectValue placeholder="Choose theme" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectLabel className="flex items-center gap-2">
                <span>Choose theme</span>
              </SelectLabel>
              <SelectItem
                value="systemDefault"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>System Default</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p>Chat Wallpaper</p>
        <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
          {chatWallpaperOptions && chatWallpaperOptions.length > 0
            ? chatWallpaperOptions.map((item) => (
                <div
                  className={`${item.color} border-1 hover:border-neutral-200 border-transparent rounded-md w-10 h-10 cursor-pointer`}
                  key={item.id}
                ></div>
              ))
            : null}
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="sayHiDoodle"
            className="data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
          />
          <label
            htmlFor="sayHiDoodle"
            className="peer-disabled:opacity-70 text-sm leading-none peer-disabled:cursor-not-allowed"
          >
            SayHi Doodle
          </label>
        </div>
        <div>
          <Button className="bg-neutral-500 hover:bg-neutral-700 mt-2 w-30 font-normal text-red-300 hover:text-red-400 cursor-pointer">
            Reset
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p className="text-xs">Text size</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-44 data-[placeholder]:text-neutral-200">
            <ALargeSmall className="text-white" size={16} />
            <SelectValue
              placeholder="Choose text size"
              className="text-white"
            />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectLabel className="flex items-center gap-2">
                <span>Choose text size</span>
              </SelectLabel>
              <SelectItem
                value="systemDefault"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>System Default</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Personalization;

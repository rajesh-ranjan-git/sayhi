import { UserRound } from "lucide-react";
import { settingsContextOptions } from "@/config/config";
import SettingsContextRightContent from "@/components/context/settingsContextRightContent";

const SettingsContext = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-between bg-neutral-800 p-1 rounded-l-md w-[40%] h-full text-white text-sm">
        <div className="w-full">
          {settingsContextOptions && settingsContextOptions.length > 0
            ? settingsContextOptions.map((item) => (
                <div
                  className="hover:bg-neutral-600 rounded-md w-full"
                  key={item.id}
                >
                  <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
                    <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="w-full">
          <div className="hover:bg-neutral-600 rounded-md w-full">
            <div className="flex items-center gap-2 p-2 pl-[1px] w-full transition-all ease-in-out cursor-pointer">
              <div className="bg-green-600 rounded-full w-[2px] h-3"></div>
              <UserRound size={15} />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
      <SettingsContextRightContent />
    </div>
  );
};

export default SettingsContext;

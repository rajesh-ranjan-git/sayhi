import { Checkbox } from "@/components/ui/checkbox";
import { storageOptions } from "@/config/config";

const Storage = () => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-r-md w-full h-full text-white">
      <h2 className="font-semibold">Storage</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>Automatic Downloads</p>
        <p className="mb-2 text-xs">
          Choose which media will be automatically downloaded from the messages
          you receive
        </p>
        {storageOptions && storageOptions.length > 0
          ? storageOptions.map((item) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={item.id}
                  className="data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
                />
                <label
                  htmlFor={item.id}
                  className="peer-disabled:opacity-70 text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  {item.name}
                </label>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Storage;

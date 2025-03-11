import { keyboardShortcutOptions } from "@/config/config";

const Shortcuts = () => {
  return (
    <div className="flex flex-col gap-1 bg-neutral-600 p-3 rounded-r-md w-[60%] h-full text-white">
      <h2 className="font-semibold">Shortcuts</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>Keyboard shortcuts</p>
        {keyboardShortcutOptions && keyboardShortcutOptions.length > 0
          ? keyboardShortcutOptions.map((item) => (
              <div
                className="flex justify-between items-center text-xs"
                key={item.id}
              >
                <span>{item.name}</span>
                {item.key}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Shortcuts;

import { ArrowRight, Equal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { keyboardShortcutOptions } from "@/config/config";

const Shortcuts = () => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-r-md w-full h-full text-white">
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
      <div className="flex flex-col gap-2 py-2">
        <p>Quick emojis</p>
        <span className="text-xs">
          When typing a message, use the colon symbol to quickly search and
          access Emojis in-line.
        </span>
        <div className="flex justify-between items-center gap-2">
          <span>Cat</span>
          <div className="flex justify-between items-center gap-5">
            <Badge variant="outline" className="text-neutral-300">
              {":"}
            </Badge>
            <ArrowRight />
            <Badge variant="outline" className="w-6 text-neutral-300">
              :cat
            </Badge>
            <Equal />
            <Badge variant="outline" className="w-6 text-neutral-300">
              🐱
            </Badge>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span>Hat</span>{" "}
          <div className="flex justify-between items-center gap-5">
            <Badge variant="outline" className="text-neutral-300">
              {":"}
            </Badge>
            <ArrowRight />
            <Badge variant="outline" className="w-6 text-neutral-300">
              :hat
            </Badge>
            <Equal />
            <Badge variant="outline" className="w-6 text-neutral-300">
              🎩
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;

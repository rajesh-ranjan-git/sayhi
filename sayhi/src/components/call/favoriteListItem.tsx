import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

const FavoriteListItem = () => {
  return (
    <div className="flex items-center gap-3 hover:bg-neutral-600 p-2 py-2 rounded-md w-full transition-all ease-in-out cursor-pointer">
      <div className="cursor-pointer">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <span className="font-semibold">Rajesh Ranjan</span>
        </div>
        <div className="flex items-center gap-2 w-full text-xs">
          <span>Outgoing</span>
        </div>
      </div>
      <Checkbox
        id="fav"
        className="data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
      />
    </div>
  );
};

export default FavoriteListItem;

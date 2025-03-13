import { UserRoundPlus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FavoritesSearchbar from "@/components/searchbar/favoritesSearchbar";
import FavoriteListItem from "@/components/call/favoriteListItem";

const CallListFavorites = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-2 pt-0 border-neutral-800 border-y-3 w-full">
      <div className="w-full">
        <span className="px-2 text-white text-xs">Favorites</span>
        <Popover>
          <PopoverTrigger className="flex items-center gap-3 hover:bg-neutral-600 p-2 py-2 rounded-md w-full text-neutral-200 transition-all ease-in-out cursor-pointer">
            <div className="flex justify-center items-center bg-neutral-800 p-3 rounded-full cursor-pointer">
              <UserRoundPlus size={20} />
            </div>
            <div className="w-full font-semibold text-left">
              <span>Add Favorite</span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-800 p-0 border-0 rounded-md w-60">
            <div className="flex flex-col justify-between p-1 rounded-md h-full text-white text-sm">
              <div className="pt-2 pl-2">
                <h1 className="font-semibold text-lg">Add Favorites</h1>
              </div>
              <FavoritesSearchbar />
              <div className="rounded-md w-full text-neutral-600 text-xs">
                <div className="flex items-center gap-2 p-2 w-full transition-all ease-in-out">
                  <span>Frequently contacted</span>
                </div>
              </div>
              <FavoriteListItem />
              <FavoriteListItem />
              <FavoriteListItem />
              <FavoriteListItem />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CallListFavorites;

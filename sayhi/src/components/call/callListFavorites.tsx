import { UserRoundPlus } from "lucide-react";

const CallListFavorites = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-2 pt-0 border-neutral-800 border-y-3 w-full">
      <div className="w-full">
        <span className="px-2 text-white text-xs">Favorites</span>
        <div className="flex items-center gap-3 hover:bg-neutral-600 p-2 py-2 rounded-md w-full text-neutral-200 transition-all ease-in-out cursor-pointer">
          <div className="flex justify-center items-center bg-neutral-800 p-3 rounded-full cursor-pointer">
            <UserRoundPlus size={20} />
          </div>
          <div className="w-full font-semibold">
            <span>Add Favorite</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallListFavorites;

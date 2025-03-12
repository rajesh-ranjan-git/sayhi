import { LiaSearchSolid } from "react-icons/lia";

const ArchivedListSearchbar = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 w-full h-16 text-white">
      <div className="flex justify-between items-center px-3 w-full h-16">
        <div className="flex items-center bg-neutral-600 p-1 border-b rounded-sm w-full text-sm">
          <div className="px-2 py-1">
            <LiaSearchSolid />
          </div>
          <div className="px-1 w-full">
            <input
              placeholder="Search archived chats"
              className="rounded-sm outline-none w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedListSearchbar;

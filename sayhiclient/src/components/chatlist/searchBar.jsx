import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 bg-search-input-container-background py-3 pl-5 h-14">
      <div className="flex flex-grow items-center gap-5 bg-panel-header-background px-3 py-1 rounded-lg">
        <div>
          <BiSearchAlt2
            className="text-panel-header-icon text-lg cursor-pointer"
            title="Search Chat"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search or start a new chat..."
            className="bg-transparent focus:outline-none w-full text-white text-sm"
          />
        </div>
      </div>
      <div className="pr-5 pl-3">
        <BsFilter
          className="text-panel-header-icon text-lg cursor-pointer"
          title="Filter Chat"
        />
      </div>
    </div>
  );
};

export default SearchBar;

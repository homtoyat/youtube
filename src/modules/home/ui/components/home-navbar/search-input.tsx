import { SearchIcon } from "lucide-react";
import React from "react";

export const SearchInput = () => {
  //todo add serach functionality
  return (
    <form className="flex w-full max-w-[600px] ">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="search "
          className="w-full pl-4 py-2 pr-12 rounded-l-full  border focus:outline-none focus:border-blue-400"
        />
      </div>
      {/* todo add remove search button */}
      <button
        type="submit"
        className="  px-5 py-2.5  bg-gray-0 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <SearchIcon className="size-4"></SearchIcon>
      </button>
    </form>
  );
};

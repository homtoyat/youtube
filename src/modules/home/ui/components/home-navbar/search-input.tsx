import { SearchIcon } from "lucide-react";
import React from "react";

export const SearchInput = () => {
  //todo add serach functionality
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="search "
          className="w-full rounded-l-full border py-2 pl-4 pr-12 focus:border-blue-400 focus:outline-none"
        />
      </div>
      {/* todo add remove search button */}
      <button className="bg-gray-0 rounded-r-full border border-l-0 bg-slate-100 px-5 py-2.5 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50">
        <SearchIcon className="size-4"></SearchIcon>
      </button>
    </form>
  );
};

import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="relative flex pt-2 items-center">
      <Input
        type="search"
        placeholder="Search ..."
        className="py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      />
      <SearchIcon
        size={10}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default Search;

import React from "react";
import { useGlobalContext } from "../../context";
import {FaSearch} from 'react-icons/fa'
function SearchForm() {
  const { setSearch, Search} = useGlobalContext();

  return (
    <div className="flex justify-center flex-col font-serif items-center pb-4">
      <h2 className="text-center text-3xl mt-6 m-4 capitalize">
        search product by category
      </h2>
      <div className="text-center p-6 dark:shadow-xl  dark:shadow-slate-600 w-full md:w-2/3 px-10 shadow-xl">
        <div className=" w-full  mx-auto relative lg:mb-0  mb-4">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={Search}
            name="name"
            className="w-full   rounded-full shadow-lg border  text-slate-800 focus:outline-none pl-10 px-4   lg:px-12  py-2 "
            placeholder="Category Name..."
          />
          <span className="absolute  text-center top-3 left-6 ml-auto opacity-50 dark:text-slate-800 "><FaSearch /></span>
        </div>
      </div>
    </div>
  );
}
export default React.memo(SearchForm);

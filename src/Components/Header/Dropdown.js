import React from "react";
import { Link } from "react-router-dom";
import PageName from "../../PublicLink/PageName";
function Dropdown({ toggle, isOpane }) {
  return (
    <div
      className={
        isOpane
          ? ` flex-col transform duration-700   font-serif border-t p-6  pt-2 sm:hidden justify-center items-center bg-gray-800`
          : "transform duration-700  hidden"
      }
    >
      <nav className="mt-0 w-full">
        {PageName.map((page) => {
          const { linkAddress, name, id } = page;
          return (
            <ul key={id} className="flex text-center ">
              <li className="mt-8 w-full">
                <Link
                  onClick={toggle}
                  className="bg-gray-800 border w-2/3 px-16 rounded-full  hover:bg-white hover:text-black text-white py-3"
                  to={linkAddress}
                >
                  {name}
                </Link>
              </li>
            </ul>
          );
        })}
      </nav>
    </div>
  );
}

export default Dropdown;

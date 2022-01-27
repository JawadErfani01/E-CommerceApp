import React from "react";
import { Link } from "react-router-dom";

import { FaTelegram, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
function Fotter() {
  return (
    <div className="bg-gray-900  z-10 mt-auto text-white bottom-0 w-full shadow-xl text-center text-lg p-2">
      <nav className="text-sm w-1/2 md:w-2/5 xl:w-1/4 mx-auto sm:text-base  py-3 my-4 rounded-full lg:text-xl hover:scale-110  ease-in duration-300 bg-transparent border px-12 focus:outline-none hover:bg-white hover:text-black animate-pulse">
        <button >Contact_WithUs</button>
      </nav>
      <div className="flex justify-center items-end mt-10 h-ful  text-4xl m-2 text-white ">
        <a
          target="_blank"
          href="https://twitter.com/jawaderfani01"
          className=" fotter-icon"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          href="https://telegram.com/@jawaderfani01"
          className=" fotter-icon"
        >
          <FaTelegram />
        </a>{" "}
        <a
          target="_blank"
          href="https://facebook.com/jawaderfani01"
          className=" fotter-icon"
        >
          <FaFacebook />
        </a>{" "}
        <a
          target="_blank"
          href="https://instagram.com/jawaderfani01"
          className=" fotter-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Fotter;

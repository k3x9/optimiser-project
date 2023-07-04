import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap text-black justify-end top-0 w-full bg-black">
      <a
        className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400 text-white"
        href="mailto:kumar.306@iitj.ac.in"
        target="_blank"
      >
        Mail
      </a>
      <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400 text-white">
        Contact
      </a>
      <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400 text-white">
        Linked In
      </a>
      <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400 text-white">
        Sponsors
      </a>
      <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400 text-white">
        Read More
      </a>
    </div>
  );
};

export default Navbar;

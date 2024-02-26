import React from "react";
import { NavbarStaticItems } from "./NavbarStaticItems";
import { Link } from "react-router-dom";

const NavbarItems = () => {
  return (
    <ul class="hidden md:flex flex-auto space-x-2">
      {NavbarStaticItems.map((item) => (
        <Link
          to={item.link}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded"
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};
export default NavbarItems;

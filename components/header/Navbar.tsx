import React from "react";
import { Icons } from "../Icons";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="hidden lg:flex lg:justify-between lg:items-center">
        <Link href={"/"}>
          <Icons.logo height={50} width={50} />
        </Link>
        <h1 className="text-4xl">North Waghi District Development Authority</h1>
        <Icons.crest height={60} width={60} />
      </div>
      <div className="hidden lg:flex">
        <NavItems />
      </div>
      {/* Mobile Nav */}
      <div className="lg:hidden flex justify-between items-center">
        <Icons.logo height={50} width={50} />
        <h1 className="text-4xl">
          {/* ToDo: Mobile Nav */}
          Mobile Nav
        </h1>
        <Icons.crest height={60} width={60} />
      </div>
    </nav>
  );
};

export default Navbar;

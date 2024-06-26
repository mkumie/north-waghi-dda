import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Search from "../Search";

const Header = () => {
  return (
    <header>
      <div className="hidden md:flex justify-between items-center border-b-2">
        <Link href={"/"}>
          <Icons.logo height={50} width={50} />
        </Link>
        <h1 className="text-3xl text-center">
          North Waghi District Development Authority
        </h1>
        <Icons.crest height={70} width={70} />
      </div>
      <div className="hidden md:flex border-b-2">
        <Navbar />
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden flex justify-between items-center border-b-2">
        <Link href={"/"}>
          <Icons.logo height={50} width={50} />
        </Link>
        <MobileNav />
        <Icons.crest height={70} width={70} />
      </div>
      <div className="items-center">
        {/* ToDo: Search Component */}
        <Search />
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import React from "react";
import FooterContents from "./FooterContents";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-1 text-xs">
      <h3>North Waghi District</h3>
      <FooterContents />
      <p>&copy;Copyright {year}</p>
      <p className="text-[0.5rem] mt-4">
        By <Link href={"https://yhuwheidevs.tech"}>Yhu Whei Devs</Link>
      </p>
    </div>
  );
};

export default Footer;

// research to get year for the year variable

import Link from "next/link";
import React from "react";
import FooterContents from "./FooterContents";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-1 text-xs mt-4 border-t-2">
      <h3 className="font-semibold p-1">North Waghi District</h3>
      <FooterContents />
      <SocialLinks />
      <p className="mt-4">&copy;Copyright {year}</p>
      <p className="text-[0.5rem] mt-4">
        By <Link href={"https://yhuwheidevs.tech"}>Yhu Whei Devs</Link>
      </p>
    </footer>
  );
};

export default Footer;

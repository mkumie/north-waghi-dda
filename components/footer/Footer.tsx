import Link from "next/link";
import React from "react";
import FooterContents from "./FooterContents";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-1 text-xs mt-4 border-t-2">
      <h3 className="font-semibold p-1">District of North Waghi</h3>
      <FooterContents />
      <SocialLinks />
      <p className="mt-4">
        &copy;{year} North Waghi District. All rights reserved.
      </p>
      <p className="text-[0.5rem] mt-4">
        By{" "}
        <Link href={"https://yhuwheidevs.tech"} target="_blank">
          Yhu Whei Devs
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

// work on footer texts overlapping to next line, research + sort
// before moving on...

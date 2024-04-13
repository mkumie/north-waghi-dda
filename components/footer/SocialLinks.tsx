import { FacebookIcon, LinkedinIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="">
      <p className="font-semibold text-center">Follow Us</p>
      <div className="flex gap-4">
        <Link
          href={"www.facebook.com/northwaghi/"}
          className="border border-cyan-900 p-1"
        >
          <FacebookIcon color="blue" />
        </Link>
        <Link
          href={"www.linkedin.com/northwaghi/"}
          className="border border-cyan-900 p-1"
        >
          <LinkedinIcon color="#4c4cc3" />
        </Link>
        <Link
          href={"www.twitter.com/northwaghi/"}
          className="border border-cyan-900 p-1"
        >
          <XIcon color="#555" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;

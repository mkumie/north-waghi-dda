import { LinkedinIcon, XIcon } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
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
          <FaFacebook color="blue" size={25} />
        </Link>
        <Link
          href={"www.linkedin.com/northwaghi/"}
          className="border border-cyan-900 p-1"
        >
          <FaLinkedin color="#0A66C2" size={25} />
        </Link>
        <Link
          href={"www.twitter.com/northwaghi/"}
          className="border border-cyan-900 p-1"
        >
          <FaTwitter color="#1D9BF0" size={25} />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;

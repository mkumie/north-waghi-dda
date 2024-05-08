import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold">Talk to Us</h4>
      <div className="flex flex-row gap-4">
        <Link href={"tel:+67512345678"}>
          <FiSmartphone size={20} />
        </Link>
        <Link href={"https://wa.me/12345678"}>
          <FaSquareWhatsapp size={20} />
        </Link>
        <Link href={"mailto:enquiry@northwaghi.gov.pg"}>
          <CiMail size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;

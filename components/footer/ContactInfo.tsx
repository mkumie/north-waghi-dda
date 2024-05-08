import React from "react";
import Contact from "./Contact";

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold">Contact Information</h4>
      <p>Post Office Box 1110</p>
      <p>Banz, Jiwaka Province</p>
      <br />
      <Contact />
    </div>
  );
};

export default ContactInfo;

import { about_components } from "@/utils";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h4 className="font-semibold">About Us</h4>
      {about_components.map((component, index) => (
        <p key={index}>
          <Link href={component.href}>{component.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default About;

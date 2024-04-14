import { nav_menus } from "@/utils";
import Link from "next/link";
import React from "react";

const About = () => {
  const about = nav_menus.filter((menu) => menu.label.href === "/about");

  const menu = { ...about }[0];

  return (
    <div>
      <h4 className="font-semibold">{menu.label.title}</h4>
      {menu.submenu?.map((submenu, index) => (
        <p key={index}>
          <Link href={submenu.href}>{submenu.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default About;

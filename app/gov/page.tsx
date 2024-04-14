import ComponentWrapper from "@/components/ComponentWrapper";
import { constructMetadata, toSentenceCase } from "@/lib/utils";
import { nav_menus } from "@/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "North Waghi DDA Services",
  description: "North Waghi District Government Services",
});

const Government = () => {
  const gov = nav_menus.filter((menu) => menu.label.href === "/gov");

  const menu = { ...gov }[0];

  return (
    <ComponentWrapper className="flex flex-col items-center gap-4">
      <h1 className="font-semibold">
        Government Services in North Waghi District
      </h1>
      <ul className="items-center">
        {menu.submenu?.map((item) => (
          <li key={item.title} className="items-center">
            <Link href={item.href}>{toSentenceCase(item.title)}</Link>
          </li>
        ))}
      </ul>
    </ComponentWrapper>
  );
};

export default Government;

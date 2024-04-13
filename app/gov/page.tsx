import ComponentWrapper from "@/components/ComponentWrapper";
import { constructMetadata, toSentenceCase } from "@/lib/utils";
import { gov_components } from "@/utils";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
// import { metadata } from "../layout";

export const metadata: Metadata = constructMetadata({
  title: "North Waghi DDA Services",
  description: "North Waghi District Government Services",
});

const Government = () => {
  return (
    <ComponentWrapper className="flex flex-col items-center gap-4 pl-2 pr-2">
      <h1 className="font-semibold">
        Government Services in North Waghi District
      </h1>
      <ul className="items-center">
        {gov_components.map((component, index) => (
          <li key={index} className="items-center">
            <Link href={component.href}>{toSentenceCase(component.title)}</Link>
          </li>
        ))}
      </ul>
    </ComponentWrapper>
  );
};

export default Government;

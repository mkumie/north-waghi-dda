import { toSentenceCase } from "@/lib/utils";
import { gov_components } from "@/utils";
import Link from "next/link";
import React from "react";

const Government = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-semibold">
        Government Services in North Waghi District
      </h1>
      <ul>
        {gov_components.map((component, index) => (
          <li key={index}>
            <Link href={component.href}>{toSentenceCase(component.title)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Government;

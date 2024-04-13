// import { metadata } from "@/lib/utils";
// import { metadata } from "@/app/layout";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = constructMetadata({
  title: "North Waghi DDA Police",
  description: "North Waghi District Offical Website",
});

const Police = () => {
  return <div>Police</div>;
};

export default Police;

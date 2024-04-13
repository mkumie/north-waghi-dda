import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = constructMetadata({
  title: "North Waghi DDA Education",
  description: "North Waghi District Offical Website",
});

const Education = () => {
  return <div>Education</div>;
};

export default Education;

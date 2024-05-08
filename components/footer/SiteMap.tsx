import Link from "next/link";
import React from "react";

const SiteMap = () => {
  return (
    <div>
      <h4 className="font-semibold">Site Map</h4>
      <p>
        <Link href={"/gov"}>Government Services</Link>
      </p>
      <p>
        <Link href={"/community"}>Community Resources</Link>
      </p>
      <p>
        <Link href={"/updates"}>News and Updates</Link>
      </p>
      <p>
        <Link href={"/engage"}>Engagement and Participation</Link>
      </p>
      <p>
        <Link href={"/business"}>Business Resources</Link>
      </p>
      <p>
        <Link href={"/online"}>Online Services</Link>
      </p>
    </div>
  );
};

export default SiteMap;

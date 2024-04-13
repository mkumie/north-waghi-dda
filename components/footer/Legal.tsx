import React from "react";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Link from "next/link";

const Legal = () => {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold">Legal</h4>
      <p>
        <Link href={"/legal/privacy"}>Privacy</Link>
      </p>
      <p>
        <Link href={"/legal/terms"}>Terms of Use</Link>
      </p>
    </div>
  );
};

export default Legal;

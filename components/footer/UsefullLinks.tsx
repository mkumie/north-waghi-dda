import Link from "next/link";
import React from "react";

const UsefullLinks = () => {
  return (
    <div>
      <h4 className="font-semibold">Usefull Links</h4>
      <p>
        <Link href={"www.jiwaka.gov.pg"}>Jiwaka Provincial Government</Link>
      </p>
      <p>
        <Link href={"https//pmnec.gov.pg"}>Prime Minister and NEC</Link>
      </p>
      <p>
        <Link href={"https://www.parliament.gov.pg"}>National Parliament</Link>
      </p>
      <p>
        <Link href={"https://info.gov.pg/"}>National Information Centre</Link>
      </p>
    </div>
  );
};

export default UsefullLinks;

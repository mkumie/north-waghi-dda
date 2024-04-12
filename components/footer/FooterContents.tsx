import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";
import SiteMap from "./SiteMap";
import Privacy from "./Privacy";
import Terms from "./Terms";
import UsefullLinks from "./UsefullLinks";

const FooterContents = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <ContactInfo />
      <QuickLinks />
      <SocialLinks />
      <SiteMap />
      <Privacy />
      <Terms />
      <UsefullLinks />
    </div>
  );
};

export default FooterContents;

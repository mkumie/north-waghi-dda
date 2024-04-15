import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";
import SiteMap from "./SiteMap";
import Privacy from "./Privacy";
import Terms from "./Terms";
import UsefullLinks from "./UsefullLinks";
import Legal from "./Legal";
import About from "./About";

const FooterContents = () => {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 mb-4 sm:container sm:justify-around">
      <ContactInfo />
      {/* <QuickLinks /> */}
      {/* <SocialLinks /> */}
      <SiteMap />
      <Legal />
      {/* <Terms /> */}
      <UsefullLinks />
      <About />
    </div>
  );
};

export default FooterContents;

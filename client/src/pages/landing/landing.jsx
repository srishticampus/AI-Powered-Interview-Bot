import React from "react";
import { LandingNavbar } from "../../components/ui/landingNavbar/landingNavbar";
import { LandingHeader } from "../../components/landing/header";
import { HowItWorks } from "../../components/landing/howItWorks";

const Landing = () => {
  return (
    <div className="tw-min-h-screen tw-bg-gradient-to-br tw-from-blue-50 tw-to-white">
      <LandingNavbar />
      <LandingHeader />
      <HowItWorks />
    </div>
  );
};
export default Landing;

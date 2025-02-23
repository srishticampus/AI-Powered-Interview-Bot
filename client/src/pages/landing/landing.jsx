import React from "react";
import { LandingNavbar } from "../../components/ui/landingNavbar/landingNavbar";
import { LandingHeader } from "../../components/landing/header";
import { HowItWorks } from "../../components/landing/howItWorks";
import { ExploreOpportunities } from "../../components/landing/explore";
import { CallToAction } from "../../components/landing/callToAction";
import { Footer } from "../../components/landing/footer";
import { UserNavbar } from "../../components/user/navbar/userNavbar";
import { useUserLoggedin } from "../../hooks/useLoggedIn";

const Landing = () => {
  const isLoggedIn = useUserLoggedin();
    
  return (
    <div className="tw-min-h-screen tw-bg-gradient-to-br tw-from-blue-50 tw-to-white">
      {isLoggedIn ? <UserNavbar /> : <LandingNavbar />}
      <LandingHeader />
      <HowItWorks />
      <ExploreOpportunities />
      <CallToAction />
      <Footer />
    </div>
  );
};
export default Landing;

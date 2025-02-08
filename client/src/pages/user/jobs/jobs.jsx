import { Footer } from "../../../components/landing/footer";
import { CompanyJobs } from "../../../components/user/jobs/jobs";
import { LandingNavbar } from "../../../components/ui/landingNavbar/landingNavbar";

export const Jobs = () => {
  return (
    <div>
      <LandingNavbar />
      <CompanyJobs />
      <Footer />
    </div>
  );
};

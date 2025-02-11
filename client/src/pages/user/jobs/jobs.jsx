import { Footer } from "../../../components/landing/footer";
import { CompanyJobs } from "../../../components/user/jobs/jobs";
import { LandingNavbar } from "../../../components/ui/landingNavbar/landingNavbar";
import { useUserLoggedin } from "../../../hooks/useLoggedIn";
import { UserNavbar } from "../../../components/user/navbar/userNavbar";

export const Jobs = () => {
  const isLoggedIn = useUserLoggedin();
  return (
    <div>
      {isLoggedIn ? <UserNavbar /> : <LandingNavbar />}
      <CompanyJobs />
      <Footer />
    </div>
  );
};

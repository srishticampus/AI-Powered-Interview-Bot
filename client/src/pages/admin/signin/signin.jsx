import { Footer } from "../../../components/landing/footer";
import { LandingNavbar } from "../../../components/ui/landingNavbar/landingNavbar";
import { SigninForm } from "../../../components/admin/signInForm/signinForm";

export const AdminSignIn = () => {
  return (
    <div>
      <LandingNavbar />
      <SigninForm />
      <Footer />
    </div>
  );
};

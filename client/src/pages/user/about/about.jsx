import { Footer } from "../../../components/landing/footer";
import { LandingNavbar } from "../../../components/ui/landingNavbar/landingNavbar";
import { AboutHeader } from "../../../components/user/about/aboutHeader";
import { ContactForm } from "../../../components/user/contact/contactForm";
import { ContactHeader } from "../../../components/user/contact/contactHeader";

export const About = () => {
  return (
    <div>
      <LandingNavbar />
      <AboutHeader />
      <ContactForm/>
      <Footer />
    </div>
  );
};

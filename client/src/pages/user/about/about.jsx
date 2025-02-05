import { Footer } from "../../../components/landing/footer";
import { LandingNavbar } from "../../../components/ui/landingNavbar/landingNavbar";
import { AboutContent } from "../../../components/user/about/aboutContent";
import { AboutHeader } from "../../../components/user/about/aboutHeader";
import { WhyChooseUs } from "../../../components/user/about/whyChooseUs";
import { ContactForm } from "../../../components/user/contact/contactForm";
import { ContactHeader } from "../../../components/user/contact/contactHeader";

export const About = () => {
  return (
    <div>
      <LandingNavbar />
      <AboutHeader />
      <AboutContent/>
      <WhyChooseUs/>
      <Footer />
    </div>
  );
};

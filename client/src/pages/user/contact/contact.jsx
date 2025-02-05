import { Footer } from "../../../components/landing/footer";
import { LandingNavbar } from "../../../components/ui/landingNavbar/landingNavbar";
import { ContactForm } from "../../../components/user/contact/contactForm";
import { ContactHeader } from "../../../components/user/contact/contactHeader";

export const Contact = () => {
  return (
    <div>
      <LandingNavbar />
      <ContactHeader />
      <ContactForm/>
      <Footer />
    </div>
  );
};

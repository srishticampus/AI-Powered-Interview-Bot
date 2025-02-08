import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";
import Landing from "./pages/landing/landing";
import { Signup } from "./pages/user/signup/signup";
import { SignIn } from "./pages/user/signin/signin";
import { Contact } from "./pages/user/contact/contact";
import { About } from "./pages/user/about/about";
import { Jobs } from "./pages/user/jobs/jobs";
import "./App.css";
import { ForgetPassword } from "./pages/user/forgetPassword/forgetPassword";

function App() {
  return (
    <BrowserRouter basename="/lexsi">
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/signin" element={<SignIn />} />
        <Route path="/user/forget-password" element={<ForgetPassword />} />
        <Route path="/user/about" element={<About />} />
        <Route path="/user/jobs" element={<Jobs />} />
        <Route path="/user/contact" element={<Contact />} />

        {/* this route should be last */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

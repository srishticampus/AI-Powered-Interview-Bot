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
import { AdminSignIn } from "./pages/admin/signin/signin";
import { AdminDashboard } from "./pages/admin/dashboard/adminDashboard";
import { ProtectAdminRoutes } from "./pages/admin/protectRoute";
import { UserHome } from "./pages/user/home/userHome";

function App() {
  return (
    <BrowserRouter basename="/lexsi">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/signin" element={<SignIn />} />
        <Route path="/user/forget-password" element={<ForgetPassword />} />
        <Route path="/user/about" element={<About />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/jobs" element={<Jobs />} />
        <Route path="/user/contact" element={<Contact />} />

        {/* admin  */}
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route element={<ProtectAdminRoutes />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        {/* this route should be last */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

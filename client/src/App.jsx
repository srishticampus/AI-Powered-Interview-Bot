import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";
import Landing from "./pages/landing/landing";
import "./App.css";
import { Signup } from "./pages/user/signup/signup";
import { SignIn } from "./pages/user/signin/signin";
import { Contact } from "./pages/user/contact/contact";

function App() {
  return (
    <BrowserRouter basename="/lexsi">
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/signin" element={<SignIn />} />
        <Route path="/user/contact" element={<Contact />} />

        {/* this route should be last */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

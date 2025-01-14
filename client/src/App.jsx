import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";
import Landing from "./pages/landing/landing";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />

        {/* this route should be last  */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

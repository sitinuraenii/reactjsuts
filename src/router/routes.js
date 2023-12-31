import { HashRouter, Route, Routes } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

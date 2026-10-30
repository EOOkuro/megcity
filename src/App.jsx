import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Leagues from "./pages/Leagues.jsx";
import Incubation from "./pages/Incubation.jsx";
import Partners from "./pages/Partners.jsx";
import FedOs from "./pages/FedOs.jsx";
import Page from "./pages/Page.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/incubation" element={<Incubation />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/fedos" element={<FedOs />} />
        <Route path="/*" element={<Page />} />
      </Route>
    </Routes>
  );
}

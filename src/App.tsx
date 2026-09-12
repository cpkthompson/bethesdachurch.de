import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Leuchtturm from "./pages/Leuchtturm";
import Ministries from "./pages/Ministries";
import Prayer from "./pages/Prayer";
import Weekly from "./pages/Weekly";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="journey" element={<Journey />} />
        <Route path="ministries" element={<Ministries />} />
        <Route path="leuchtturm" element={<Leuchtturm />} />
        <Route path="weekly" element={<Weekly />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="prayer" element={<Prayer />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

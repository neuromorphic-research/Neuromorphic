import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { Insights } from "./pages/Insights";
import { OurStory } from "./pages/OurStory";
import { Products } from "./pages/Products";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

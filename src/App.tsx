import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RoiCalculator } from "./pages/RoiCalculator";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roi" element={<RoiCalculator />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

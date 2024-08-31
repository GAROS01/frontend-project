import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Design from "./pages/Design";
import Calendar from "./pages/Calendar";
import Session from "./pages/Session";
import "./App.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/design" element={<Design />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </div>
  );
}

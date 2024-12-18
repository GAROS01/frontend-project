import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Design from "../pages/Designs";
import Calendar from "../pages/Calendar";
import Session from "../pages/Session";
import FormCitas from "../pages/FormCitas";

export default function routes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/design" element={<Design />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/session" element={<Session />} />
        <Route path="/citas" element={<FormCitas />} />
      </Routes>
    </>
  );
}

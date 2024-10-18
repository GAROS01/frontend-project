import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "../styles/Calendar.css";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

export default function Calendar() {
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/citas");
  };

  return (
    <div>
      <Nav />
      <Header />

      <div className="div-calendar">
        <div className="calendar">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
              selected
                ? `Seleccionada: ${selected.toLocaleDateString()}`
                : "Seleccione una fecha"
            }
          />
        </div>
      </div>
      <div className="div-boton">
        <button className="boton" onClick={handleButtonClick}>
          Agendar Cita
        </button>
      </div>

      <Footer />
    </div>
  );
}

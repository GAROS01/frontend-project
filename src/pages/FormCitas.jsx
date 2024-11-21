import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { reservarCita } from "../services/api/apiCitas";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/FormCitas.css";

export default function FormularioReserva() {
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState("");
  const [idManicurista, setIdManicurista] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = sessionStorage.getItem("authToken");
      if (!token) {
        setMensaje(
          "No se encontró el token de autenticación. Por favor, inicia sesión."
        );
        return;
      }

      if (!fecha) {
        setMensaje("Por favor, selecciona una fecha.");
        return;
      }

      const formattedFecha = fecha.toISOString().split("T")[0]; // Formatea la fecha a 'YYYY-MM-DD'
      const data = await reservarCita(
        token,
        formattedFecha,
        hora,
        idManicurista
      );
      setMensaje("Cita creada con éxito");
      console.log("Cita creada con éxito:", data);

      setFecha(null);
      setHora("");
      setIdManicurista("");
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <>
      <Nav />
      <Header />

      <h2>Reservar Cita</h2>
      <div className="div-form">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>
              <DayPicker mode="single" selected={fecha} onSelect={setFecha} />
            </label>
            {fecha && <p>Fecha seleccionada: {fecha.toLocaleDateString()}</p>}
          </div>
          <div className="div-hora">
            <label>
              Hora:
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="div-manicurista">
            <label>
              Manicurista:
              <select
                value={idManicurista}
                onChange={(e) => setIdManicurista(e.target.value)}
              >
                <option value="">Seleccione un manicurista</option>
                <option value="1">Sofia Lopez</option>
                <option value="2">Clara Mendoza</option>
                <option value="3">Valeria Ortiz</option>
              </select>
            </label>
          </div>
          <button type="submit" className="boton">
            Reservar Cita
          </button>
          {mensaje && <p>{mensaje}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}

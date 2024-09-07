import { Link } from "react-router-dom";

import Nav from "../components/Nav.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import agenda from "../assets/calendar.webp";
import diseño1 from "../assets/design1.png";
import diseño2 from "../assets/design3.png";
import diseño3 from "../assets/design4.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />

      <div>
        <Link to="/calendar" className="cita">
          <img className="agenda" src={agenda} alt="logo-calendario" />
          <h2 className="agenda">AGENDA TU CITA</h2>
        </Link>
        <section className="diseños">
          <h2 className="titulo-diseños">DISEÑOS DE UÑAS</h2>
          <div className="imagenes-diseños">
            <img className="uñas" src={diseño1} alt="diseños de uñas" />
            <img className="uñas" src={diseño2} alt="diseños de uñas" />
            <img className="uñas" src={diseño3} alt="diseños de uñas" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

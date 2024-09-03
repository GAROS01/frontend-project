import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import img from "../assets/logo2.webp";
import "../styles/Nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav">
        <Link className="link" to="/">
          <img className="img" src={img} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className="link" to="/products">
              Productos
            </Link>
          </li>
          <li>
            <Link className="link" to="/design">
              Diseños
            </Link>
          </li>
          <li>
            <Link className="link" to="/calendar">
              Agenda
            </Link>
          </li>
          <li>
            <Link className="link" to="/session">
              Iniciar Sesion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
